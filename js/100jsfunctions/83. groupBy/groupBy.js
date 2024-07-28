/**
 * GroupBy method for Array objects
 * @param {(elem: unknown) => unknown} callback
 * @returns {Map<unknown, unknown[]>}
 */
function groupBy(callback) {
  return this.reduce((map, elem) => {
    const key = callback(elem);
    const values = map.get(key) ?? [];

    values.push(elem);
    map.set(key, values);
    return map;
  }, new Map());
}

Array.prototype.groupBy = groupBy;

const numbers = [1, 2, 3, 4, 5];

const groupingMap = numbers.groupBy((number) =>
  number % 2 === 0 ? "even" : "odd"
);

console.log(groupingMap); // Map: 'odd' => [ 1, 3, 5 ], 'even' => [ 2, 4 ]

export { groupBy };
