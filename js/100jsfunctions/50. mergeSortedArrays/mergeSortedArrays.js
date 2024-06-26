/**
 * Returns a new array with numbers numbers from both arrays sorted in ascending order
 * @param {number[]} numbers1 - sorted in ascending order
 * @param {number[]} numbers2 - sorted in descending order
 * @returns {number[]}
 * @example
 * ```js
 * mergeSortedArrays([1, 2, 3, 4], [8, 7, 6, 5]) // [1, 2, 3, 4, 5, 6, 7, 8]
 * mergeSortedArrays([78, 92, 113, 121], [238, 114, 102, 62]) // [62, 78, 92, 102, 113, 114, 121, 238]
 * ```
 * @example May include same number array
 * ```js
 * mergeSortedArrays([29, 29, 29, 29], [11, 10, 8, 7]) // [7,8,10,11,29,29,29,29]
 * ```
 * Note: I have no idea how the first array is in ascending order but it's the requirement to pass the test -_-
 */
function mergeSortedArrays(numbers1, numbers2) {
  let i = 0;
  let j = numbers2.length - 1;
  let mergedArr = [];

  while (numbers1[i] || numbers2[j]) {
    const smallest = numbers1[i] < numbers2[j] ? numbers1[i++] : numbers2[j--];

    if (smallest !== undefined) mergedArr.push(smallest);

    /**
     * Case 1: numbers1 has all values greater than numbers2, thus, j would be exhausted, copy all values from numbers1 over
     * Case 2: numbers1 has all values smaller than numbers2, thus, i would go out of bounds, copy all values from numbers2 over
     */
    if (j < -1) {
      mergedArr = mergedArr.concat(numbers1);
      break;
    } else if (i > numbers1.length + 1) {
      mergedArr = mergedArr.concat(numbers2);
      break;
    }
  }

  return mergedArr;
}

export { mergeSortedArrays };
