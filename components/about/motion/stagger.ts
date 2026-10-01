export const REVEAL_STEP = 0.065;

export const REVEAL_MAX_INDEX = 5;

export function staggerDelay(index: number) {
  return Math.min(index, REVEAL_MAX_INDEX) * REVEAL_STEP;
}
