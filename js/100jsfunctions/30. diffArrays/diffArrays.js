/**
 * Returns a new array with numbers excluded that exists in BOTH arrays
 * @param {number[]} numbers1
 * @param {number[]} numbers2
 * @returns {number[]}
 * @example
 * ```js
 * diffArrays([7, 2, 9, 15], [15, 28, 42, 9]) // [7, 2, 28, 42]
 * ```
 */
function diffArrays(numbers1, numbers2) {
  const newArr = [];

  for (let i = 0; i < numbers1.length; i++) {
    if (!numbers2.includes(numbers1[i])) {
      newArr.push(numbers1[i]);
    }
  }

  for (let i = 0; i < numbers2.length; i++) {
    if (!numbers1.includes(numbers2[i])) {
      newArr.push(numbers2[i]);
    }
  }

  return newArr;
}

export { diffArrays };
