/**
 * Create a string of the given length and fill it with the a callback function
 * @param length The length of the string
 * @param callback The character provider
 * @returns A string of the given length with characters gave by the callback
 */
export default function randomString(
  length: number,
  callback: () => unknown,
): string {
  // Create the array
  const result = new Array(length);

  // Fill the array
  for (let index = 0; index < length; index++) {
    result[index] = callback();
  }

  // Join to output to string
  return result.join("");
}
