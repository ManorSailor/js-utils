/**
 * Given two string & a letter, returns the string with most occurrences of letter
 * @param {string} string1
 * @param {string} string2
 * @param {string} letter
 * @returns {string}
 * @example
 * ```js
 * mostRepetitions("Hello", "World", "l") // "Hello"
 * ```
 * @example Is case in-sensitive
 * ```js
 * mostRepetitions("HeLlo", "World", "l") // "Hello"
 * ```
 */
function mostRepetitions(string1, string2, letter) {
  letter = letter.toLowerCase();

  const str1Count = string1
    .toLowerCase()
    .split("")
    .filter((char) => char === letter);
  const str2Count = string2
    .toLowerCase()
    .split("")
    .filter((char) => char === letter);

  return str1Count.length > str2Count.length ? string1 : string2;
}

export { mostRepetitions };
