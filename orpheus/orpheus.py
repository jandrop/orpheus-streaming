import asyncio
import torch
from vllm import (
    AsyncLLMEngine,
    AsyncEngineArgs,
    SamplingParams,
    TokensPrompt,
)
from vllm.sampling_params import RequestOutputKind
from transformers import AutoTokenizer, PreTrainedTokenizerBase
import uuid
from dataclasses import dataclass
from .decoder import Decoder
from .engine_stats import EngineStats
from enum import Enum
import time
import logging
from .constants import (
    SNAC_TOKENS_PER_SECOND,
)
from .prompt_window import PromptWindow


class OrpheusModel:
    def __init__(self, model_name, dtype=torch.bfloat16):
        self.model_name = model_name
        self.dtype = dtype
        self.engine = self._setup_engine()
        self._engine_stats = EngineStats()
        self.available_voices = ["zoe", "zac", "jess", "leo", "mia", "julia", "leah"]
        t = AutoTokenizer.from_pretrained("./data/finetune-fp16")
        self.tokenizer = t
        self._sessions: dict[str, SessionHandle] = {}
        self._closed = False

    def _setup_engine(self):
        engine_args = AsyncEngineArgs(
            model="./data/finetune-fp16",
            max_model_len=8192,
            gpu_memory_utilization=0.8,
            enforce_eager=True,
        )
        return AsyncLLMEngine.from_engine_args(engine_args)

    def create_session(self, session_id: str, voice: str | None = None):
        if self._closed:
            raise RuntimeError("OrpheusModel is closed")

        session = SessionHandle(
            engine_stats=self._engine_stats,
            engine=self.engine,
            tokenizer=self.tokenizer,
            voice=voice,
            identifier=session_id,
        )
        self._sessions[session_id] = session
        return session

    async def close(self):
        self._closed = True


class SessionHandle:
    class State(Enum):
        WARMUP = 0
        RUNNING = 1

    def __init__(
        self,
        *,
        identifier: str,
        engine_stats: EngineStats,
        engine: AsyncLLMEngine,
        tokenizer: PreTrainedTokenizerBase,
        voice: str | None,
        max_text_context_tokens: int = 128,
        max_audio_context_tokens: int = 128,
    ):
        self._minimum_tokens_per_inference = 64
        self._ttft_threshold = 0.5
        self._max_text_context_tokens = max_text_context_tokens
        self._max_audio_context_tokens = max_audio_context_tokens
        self._identifier = identifier
        self._tokenizer = tokenizer
        self._voice = voice
        self._engine = engine
        self._engine_stats = engine_stats
        self._input_queue = asyncio.Queue[str | None]()
        self._output_queue = asyncio.Queue[bytes | None]()
        self._run_task = asyncio.create_task(self.run())
        self._clock = SessionClock()
        self._prompt = PromptWindow(
            tokenizer=self._tokenizer,
            max_tokens=self._max_text_context_tokens + self._max_audio_context_tokens,
            voice=voice,
            previous_audio_tokens=SNAC_TOKENS_PER_SECOND * 2,
        )
        self._running_inference_tasks: list[asyncio.Task] = []
        self._running_cache_tasks: list[asyncio.Task] = []

    async def run(self):
        index = -1

        async def noop():
            pass

        inference_task = asyncio.create_task(noop())
        inference_job: InferenceJob = NOOPInferenceJob()
        while True:
            prompt = await self._input_queue.get()
            index += 1
            if prompt is None:
                break

            self._prompt.push_text(prompt)
            if index == 0:
                inference = self._prompt.get_next_inference()
                if len(inference) == 0:
                    continue
                inference_job = await self._start_inference(inference)
                inference_task = asyncio.create_task(
                    self._inference_task(inference_job)
                )
                continue

            time_budget = self._clock.time_budget * 0.6

            # If we're at risk of going slower than realtime, we should start inference
            # TODO: do a real calculation here based on estimated time to first token
            if time_budget < 0.5:
                if not inference_job.finished:
                    inference_job.cancel()
                    # Allow more input tokens while the previous job is being cancelled
                    continue

                await inference_task
                inference = self._prompt.get_next_inference()
                if len(inference) == 0:
                    continue
                inference_job = await self._start_inference(inference)
                inference_task = asyncio.create_task(
                    self._inference_task(inference_job)
                )

        await inference_task
        inference = self._prompt.get_next_inference()
        while len(inference) > 0:
            inference_job = await self._start_inference(inference)
            inference_task = asyncio.create_task(self._inference_task(inference_job))
            await inference_task
            inference = self._prompt.get_next_inference()

        self._output_queue.put_nowait(None)

    async def _start_inference(self, prompt: list[int]):
        job = InferenceJob(
            engine=self._engine,
            input=prompt,
            max_tokens=2048,
        )
        return job

    async def _inference_task(self, job: "InferenceJob"):
        async def audio_task():
            async for audio in job.output_audio_stream():
                self._output_queue.put_nowait(audio)

        async def token_task():
            start_time = time.time()
            first_token = True
            token_count = 0
            async for token in job.output_token_stream():
                token_count += 1
                if first_token:
                    dt = time.time() - start_time
                    logging.info("First token: %s", dt)
                    first_token = False
                    self._engine_stats.log_time_to_first_token(
                        prompt_tokens=len(job.input), time=dt
                    )
                self._clock.tick(1)
                self._prompt.push_audio_token([token])

            self._engine_stats.log_tps(
                tokens=token_count, time=time.time() - start_time
            )

        await asyncio.gather(audio_task(), token_task())

    def eos(self):
        self._input_queue.put_nowait(None)

    def push(self, text: str):
        self._input_queue.put_nowait(text)

    async def wait_for_complete(self):
        await self._run_task

    def __aiter__(self):
        return self

    async def __anext__(self):
        audio = await self._output_queue.get()
        if audio is None:
            raise StopAsyncIteration
        return audio


@dataclass
class SessionStats:
    tftt: float

    output_tps: float
    input_tps: float

    avg_audio_tokens_per_text_token: float


class SessionClock:
    def __init__(self):
        self._start_time = time.time()
        self.wall_time: float = 0
        self.media_time: float = 0
        self._last_tick: float = time.time()

    def tick(self, audio_token_count: int):
        self.media_time += audio_token_count / SNAC_TOKENS_PER_SECOND
        self._last_tick = time.time()
        self.wall_time = self._last_tick - self._start_time

    @property
    def time_budget(self):
        self._last_tick = time.time()
        self.wall_time = self._last_tick - self._start_time
        return self.media_time - self.wall_time


class InferenceJob:
    def __init__(
        self,
        *,
        engine: AsyncLLMEngine,
        input: list[int],
        max_tokens: int,
    ):
        self.input = input
        self.req_id = str(uuid.uuid4())
        self._engine = engine
        self._audio_queue = asyncio.Queue[bytes | None]()
        self._token_queue = asyncio.Queue[int | None]()
        self._max_tokens = max_tokens
        self._cancel_task: asyncio.Task | None = None
        self.finished = False
        self._run_task = asyncio.create_task(self.run())

    def cancel(self):
        if self._cancel_task is not None:
            self._cancel_task = asyncio.create_task(self._engine.abort(self.req_id))

    async def run(self):
        decoder = Decoder()
        sampling_params = SamplingParams(
            temperature=0.6,
            top_p=0.8,
            min_tokens=7,
            max_tokens=self._max_tokens,
            stop_token_ids=[128258],
            repetition_penalty=1.1,
            output_kind=RequestOutputKind.DELTA,
        )

        tp = TokensPrompt(prompt_token_ids=self.input)

        async def decode():
            async for audio in decoder:
                self._audio_queue.put_nowait(audio)
            self._audio_queue.put_nowait(None)

        decoder_task = asyncio.create_task(decode())
        async for result in self._engine.generate(
            request_id=self.req_id,
            prompt=tp,
            sampling_params=sampling_params,
        ):
            for token in result.outputs[0].token_ids:
                if decoder.push_token(token):
                    self._token_queue.put_nowait(token)

        self._token_queue.put_nowait(None)

        decoder.eos()
        await decoder_task
        self._finished = True

    async def output_token_stream(self):
        while True:
            t = await self._token_queue.get()
            if t is None:
                break
            yield t

    async def output_audio_stream(self):
        while True:
            audio = await self._audio_queue.get()
            if audio is None:
                break
            yield audio


class NOOPInferenceJob(InferenceJob):
    def __init__(self, *args, **kwargs):
        self.finished = True

    async def run(self):
        pass

    def cancel(self):
        pass


@dataclass
class InferenceResult:
    token_limit_reached: bool
    cancelled: bool
    finished: bool
    input_text: str
    input_prefill_audio: list[int]
    output_audio: list[int]
