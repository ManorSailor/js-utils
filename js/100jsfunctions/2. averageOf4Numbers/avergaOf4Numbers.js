/**
 * Calculate average of n numbers
 * @param {...number} nums
 * @returns {number}
 * @example Basic Example
 * ```js
 * avgOfNumbers(11, 9, 33, 28) // 20.25
 * ```
 */
function avgOfNumbers(...nums) {
  const sumOfNums = nums.reduce((a, b) => a + b);
  return sumOfNums / nums.length;
}

export { avgOfNumbers as averageOf4Numbers };
