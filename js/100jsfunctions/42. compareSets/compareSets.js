/**
 * Given two sets of numbers, return an object with difference of both sets & a union
 * @param {Set<number>} setA
 * @param {Set<number>} setB
 * @returns {{ onlyA: Set<number>, onlyB: Set<number>, union: Set<number> }}
 * @example
 * ```js
 * compareSets([1,2,3]) // true
 * compareSets([1,2,3,4]) // false
 * ```
 */
function compareSets(setA, setB) {
  const onlyA = new Set();
  const onlyB = new Set();
  const union = new Set([...setA.values(), ...setB.values()]);

  setA.forEach((value) => !setB.has(value) && onlyA.add(value));
  setB.forEach((value) => !setA.has(value) && onlyB.add(value));

  return {
    onlyA,
    onlyB,
    union,
  };
}

export { compareSets };
