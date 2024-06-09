/**
 * Returns an array of numbers doubled
 * @param {number[]} numbers
 * @returns {number[]}
 * @example
 * ```js
 * doubleNumbers([1,2,3]) // [1, 4, 6]
 * ```
 */
function doubleNumbers(numbers) {
  return numbers.map((n) => n * 2);
}

export { doubleNumbers };
