from transformers import PreTrainedTokenizerBase
import logging
from typing import Tuple
from .constants import START_TOKEN, END_TOKENS, SNAC_TOKENS_PER_SECOND
from .utils import split_sentences


class PromptWindow:
    def __init__(
        self,
        tokenizer: PreTrainedTokenizerBase,
        max_tokens: int,
        voice: str | None,
        previous_audio_tokens: int,
    ):
        self._context_text = ""
        self._new_text = ""
        self._context_audio: list[int] = []
        self._prompt = []
        self._tokenizer: PreTrainedTokenizerBase = tokenizer
        self._voice = voice
        self._max_tokens = max_tokens
        self._inference_queue = list[Tuple[str, list[int]]]()
        self._previous_audio_tokens = previous_audio_tokens

    def push_text(self, text: str):
        self._new_text += text

    def push_audio_token(self, audio: list[int]):
        self._context_audio += audio

    def get_next_inference(self) -> list[int]:
        if not self._new_text:
            return []

        first_inference = self._context_text == ""
        sentences = split_sentences(self._new_text)

        # First inference should wait for a full sentence
        if first_inference and len(sentences) <= 1:
            return []

        full_text = self._context_text + self._new_text

        context_text = self._context_text[-64:]
        new_text = self._new_text
        full_text = context_text + new_text
        tokens = self._tokenizer(full_text, return_tensors="pt")

        # Leave room for 1 second of audio context
        while len(tokens) > self._max_tokens - self._previous_audio_tokens:
            print(len(tokens), self._max_tokens - SNAC_TOKENS_PER_SECOND)
            new_text = new_text[: len(new_text) // 2]
            full_text = context_text + new_text
            tokens = self._tokenizer(full_text, return_tensors="pt")

        if len(new_text) <= 1:
            logging.error(
                "Text too long to fit in prompt window, recovering but audio will be lost"
            )
            self._context_text = self._context_text + self._new_text
            self._new_text = ""
            return []

        prefill_audio = self._context_audio[-self._previous_audio_tokens :]
        final_prompt = self._format_prompt(
            text=new_text,
            prefill_audio=prefill_audio,
            voice=self._voice,
        )

        self._context_text = context_text + new_text
        self._new_text = self._new_text[len(new_text) :]

        logging.info(
            f"Prompt window inference: '{full_text}', audio_context_used: {len(prefill_audio)}"
        )
        return final_prompt

    def _format_prompt(
        self, *, text: str, prefill_audio: list[int], voice: str | None = None
    ) -> list[int]:
        if voice is not None:
            adapted_prompt = f"{voice}: {text}"
            prompt_tokens = self._tokenizer(adapted_prompt, return_tensors="pt")
            start_token = [START_TOKEN]
            end_tokens = END_TOKENS
            all_input_ids: list[int] = (
                start_token + prompt_tokens.input_ids[0].tolist() + end_tokens
            )
            return all_input_ids + prefill_audio
        else:
            prompt_tokens = self._tokenizer(text, return_tensors="pt")
            start_token = [START_TOKEN]
            end_tokens = END_TOKENS
            all_input_ids: list[int] = (
                start_token + prompt_tokens.input_ids[0].tolist() + end_tokens
            )
            return all_input_ids + prefill_audio
