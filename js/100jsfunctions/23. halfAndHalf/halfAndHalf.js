/**
 * Given a string returns a new string with first half lowercased & second half uppercased
 * @param {string} string
 * @returns {string}
 * @example
 * ```js
 * halfAndHalf("HeLLo world") // "hello WORLD"
 * ```
 */
function halfAndHalf(string) {
  const mid = Math.floor(string.length / 2);
  const firstHalf = string.slice(0, mid);
  const secondHalf = string.slice(mid);

  return `${firstHalf.toLowerCase()}${secondHalf.toUpperCase()}`;
}

export { halfAndHalf };
