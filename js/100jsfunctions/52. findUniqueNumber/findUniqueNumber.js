/**
 * Returns the unique number from the given array of numbers
 * @param {number[]} numbers
 * @returns {number}
 * @example
 * ```js
 * findUniqueNumber([1,2,3,1,2]) // 3
 * ```
 */
function findUniqueNumber(numbers) {
  // Given an array (n), there exists exactly two x (x1, x2) which repeats
  // There also exist an m which does not repeat. So, the observation here is, the array length is always going to be odd
  // Because if it's even, it must mean that either there exists more than two x OR more than one m
  if (numbers.length % 2 === 0) return undefined;

  const uniqueSet = new Set();

  for (const num of numbers) {
    if (uniqueSet.has(num)) {
      uniqueSet.delete(num);
    } else {
      uniqueSet.add(num);
    }
  }

  return uniqueSet.values().next().value;
}

export { findUniqueNumber };
