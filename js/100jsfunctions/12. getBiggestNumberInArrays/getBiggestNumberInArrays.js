/**
 * Returns the biggest number between two arrays
 * @param {number[]} numbers1
 * @param {number[]} numbers2
 * @returns {number}
 * @example
 * ```js
 * getBiggestNumberInArrays([7, 2, 9], [15, 28, 42]) // 42
 * ```
 */
function getBiggestNumberInArrays(numbers1, numbers2) {
  let maxNum = 0;
  const biggerArray = numbers1.length > numbers2.length ? numbers1 : numbers2;

  for (let i = 0; i < biggerArray.length; i++) {
    const n1Max = numbers1[i];
    const n2Max = numbers2[i];

    if (n1Max > maxNum) {
      maxNum = n1Max;
    }

    if (n2Max > maxNum) {
      maxNum = n2Max;
    }
  }

  return maxNum;
  //   return Math.max(...numbers1, ...numbers2);
}

export { getBiggestNumberInArrays };
