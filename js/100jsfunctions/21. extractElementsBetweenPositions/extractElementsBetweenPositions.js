/**
 * Given an array & start & stop, returns a new array containing all elements between start & stop (inclusive)
 * @param {number[]} numbers
 * @param {number} start
 * @param {number} stop
 * @returns {number[]}
 * @example
 * ```js
 * extractElementsBetweenPositions([7, 2, 9, 15, 28, 42], 1, 4) // [2, 9, 15, 42]
 * ```
 */
function extractElementsBetweenPositions(numbers, start, stop) {
  const startIdx = Math.min(start, stop);
  const stopIdx = Math.max(start, stop);

  // + 1 to include the element at stopIdx as well
  return numbers.slice(startIdx, stopIdx + 1);
}

export { extractElementsBetweenPositions };
