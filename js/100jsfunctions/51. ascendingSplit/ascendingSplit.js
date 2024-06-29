/**
 * Returns a new array of numbers splitted into as many sub-arrays of numbers in ascending order
 * @param {number[]} numbers
 * @returns {number[][]}
 * @example
 * ```js
 * ascendingSplit([1,2,-5,-7,0,11,24]) // [[1,2],[-5],[-7,0,11,24]]
 * ascendingSplit([99, 99, 99]) // [[99, 99, 99]]
 * ascendingSplit([]) // []
 * ```
 */
function ascendingSplit(numbers) {
  return numbers.reduce((newArr, curNum) => {
    const lastSubArr = newArr.at(-1);
    const lastNum = lastSubArr?.at(-1);

    if (!lastSubArr || curNum < lastNum) {
      newArr.push([curNum]);
    } else {
      lastSubArr.push(curNum);
    }

    return newArr;
  }, []);
}

export { ascendingSplit };
