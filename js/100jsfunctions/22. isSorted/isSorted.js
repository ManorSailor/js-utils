/**
 * Given an array checks if the array is sorted
 * @param {number[]} numbers
 * @returns {boolean}
 * @example
 * ```js
 * isSorted([7, 2, 9, 15, 28, 42], 1, 4) // false
 * ```
 */
function isSorted(numbers) {
  const isAscending = numbers.at(0) <= numbers.at(-1);

  for (let i = 0; i < numbers.length - 1; i++) {
    if (isAscending && numbers[i] <= numbers[i + 1]) {
      continue;
    } else if (!isAscending && numbers[i] >= numbers[i + 1]) {
      continue;
    }

    return false;
  }

  return true;
}

export { isSorted };
