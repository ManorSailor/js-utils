/**
 * Calculate distance which can be traveled given a budget.
 * @param {string[]} strings
 * @returns {Object.<string, number>}
 * @example
 * ```js
 * arrayToObject(["a", "b", "c"]) // { "a": 0, "b": 1, "c": 2 }
 * ```
 * @example Only stores the first occurrence in case of duplicates
 * ```js
 * arrayToObject(["a", "b", "c", "b"]) // { "a": 0, "b": 1, "c": 2 }
 * ```
 */
function arrayToObject(strings) {
  return strings.reduce((obj, string, index) => {
    if (obj[string] === undefined) {
      obj[string] = index;
    }
    return obj;
  }, {});
}

export { arrayToObject };
