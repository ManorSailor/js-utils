/**
 * Concatenate 3 strings with the specified separator
 * @param {string} string1
 * @param {string} string2
 * @param {string} string3
 * @param {string} [separator=',']
 * @returns {string}
 * @example Basic Example
 * ```js
 * concat3("HTML", "CSS", "JS", ",") // "HTML,CSS,JS"
 * ```
 */
function concat3(string1, string2, string3, separator = ",") {
  return `${string1}${separator}${string2}${separator}${string3}`;
}

export { concat3 };
