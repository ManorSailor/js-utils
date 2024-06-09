/**
 * Check if ALL numbers in an array are even
 * @param {Number[]} numbers
 * @returns {boolean}
 * @example
 * ```js
 * areAllNumbersEven([2, 4, 6, 8]) // true
 * areAllNumbersEven([2, 4, 6, 3]) // false
 * ```
 */
function areAllNumbersEven(numbers) {
  return numbers.every((n) => n % 2 === 0);
}

export { areAllNumbersEven };
