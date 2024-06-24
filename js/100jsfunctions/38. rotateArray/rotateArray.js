/**
 * Given an array of items, return a new array of items shifted to the right by n
 * @param {unknown[]} items
 * @param {number} n
 * @returns {unknown[]}
 * @example
 * ```js
 * rotateArray(["Bob",71,{"name":"JavaScript","type":"programming_language"}], 2) // [71,{"name":"JavaScript","type":"programming_language"},"Bob"]
 * rotateArray(["Wikipedia","Mozilla Developer Network","Free Code Camp","Stack Overflow"], 4) // ["Wikipedia","Mozilla Developer Network","Free Code Camp","Stack Overflow"]
 * ```
 */
function rotateArray(items, n) {
  const length = items.length;
  const newArr = new Array(length);

  items.forEach((elem, pos) => {
    const newPos = (pos + n) % length;
    newArr[newPos] = elem;
  });

  return newArr;
}

console.log(rotateArray([1, 2, 3], 13))

// export { rotateArray };
