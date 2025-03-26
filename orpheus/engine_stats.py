from typing import Tuple


class EngineStats:
    def __init__(self):
        self._time_to_first_token_stats: list[Tuple[int, float]] = []
        self._tps: list[Tuple[int, float]] = []

    def log_time_to_first_token(self, prompt_tokens: int, time: float):
        self._time_to_first_token_stats.append((prompt_tokens, time))
        if len(self._time_to_first_token_stats) > 20:
            self._time_to_first_token_stats.pop(0)

    def log_tps(self, tokens: int, time: float):
        self._tps.append((tokens, time))
        if len(self._tps) > 20:
            self._tps.pop(0)

    def estimate_time_to_first_token(self, prompt_tokens: int):
        if len(self._time_to_first_token_stats):
            return 1.0

        if prompt_tokens == 0:
            return 0.0

        total_time = 0
        total_tokens = 0
        for tokens, time in self._time_to_first_token_stats:
            total_time += time
            total_tokens += tokens

        if total_tokens == 0:
            return 0.0

        return total_time / total_tokens * prompt_tokens

    def estimate_tps(self):
        if len(self._tps):
            return 10.0

        total_time = 0
        total_tokens = 0
        for tokens, time in self._tps:
            total_time += time
            total_tokens += tokens

        return total_tokens / total_time
