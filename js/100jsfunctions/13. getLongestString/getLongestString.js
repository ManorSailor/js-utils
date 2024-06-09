/**
 * Returns the biggest string from the given array
 * @param {string[]} arrayOfStrings
 * @returns {string}
 * @example
 * ```js
 * getLongestString(["Hel", "Hello"]) // "Hello"
 * ```
 * @example Returns empty string if array is empty
 * ```js
 * getLongestString([]) // ""
 * ```
 * @example Returns the first occurrence of the longest string
 * ```js
 * getLongestString(["Hello", "Jello"]) // "Hello"
 * ```
 */
function getLongestString(arrayOfStrings) {
  let longestStr = "";

  arrayOfStrings.forEach((str) => {
    if (str.length > longestStr.length) {
      longestStr = str;
    }
  });

  return longestStr;
}

export { getLongestString };
