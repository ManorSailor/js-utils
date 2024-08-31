/**
 * Decorator function  which keeps track of how many times a func was called.
 * @returns {(...args: ...unknown) => unknown}
 */
function withCount() {
  const boundFn = (...args) => {
    boundFn.count++;
    return this(...args);
  };

  boundFn.count = 0;

  return boundFn;
}

Function.prototype.withCount = withCount;

const sum = (a, b) => a + b;
const sumWithCount = sum.withCount();

sumWithCount(1, 2);
sumWithCount(3, 4);

console.log(sumWithCount.count);

export { withCount };
