/**
 * Given an array, determines if it only contains unique values
 * @param {number[]} numbers
 * @returns {boolean}
 * @example
 * ```js
 * areValuesUnique([1,2,3]) // true
 * areValuesUnique([1,2,3,4]) // false
 * ```
 */
function areValuesUnique(numbers) {
  const numbersSet = new Set(numbers);

  return numbersSet.size === numbers.length;
}

export { areValuesUnique };
