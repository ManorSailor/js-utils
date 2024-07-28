/**
 * A non-mutating replica of the Array.sort method
 * @param {(a: unknown, b: unknown) => -1 | 1 | 0} compareFn
 * @returns {unknown[]}
 */
function sorted(compareFn) {
  return this.toSorted(compareFn);
}

Array.prototype.sorted = sorted;

const numbers = [1, 2, 3, 4, 5];

const descendingNumbers = numbers.sorted((nr1, nr2) => nr2 - nr1);

console.log(numbers); // [ 1, 2, 3, 4, 5 ]
console.log(descendingNumbers); // [ 5, 4, 3, 2, 1 ]

export { sorted };
