/**
 * Given an array of numbers & a callback, returns a Result object with all numbers that pass & fail the predicate
 * @param {number[]} numbers
 * @param {(n: number) => boolean} predicateCallback
 * @returns {Result}
 * @example
 * ```js
 * partitionArray([1,2,3,1,2], (nr) => nr % 2 === 0) // {"fail":[11,13,15],"pass":[10,12,14]}
 * ```
 */
function partitionArray(numbers, predicateCallback) {
  return numbers.reduce(
    (resultObj, num) => {
      const { pass, fail } = resultObj;

      const result = predicateCallback(num);
      result ? pass.push(num) : fail.push(num);

      return resultObj;
    },
    { pass: [], fail: [] }
  );
}

/**
 * @typedef Result
 * @type {object}
 * @prop {number[]} pass
 * @prop {number[]} fail
 */

export { partitionArray };
