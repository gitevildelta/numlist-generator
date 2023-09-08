/**
 * @param startInclusive The inclusive minimum value
 * @param endExclusive The exclusive maximum value
 * @returns A random number in the range [startInclusive, endExclusive[
 */
export default function randomNumber(
  startInclusive: number,
  endExclusive: number,
): number {
  return Math.floor(Math.random() * endExclusive) + startInclusive;
}
