/**
 * reverseForEach implementation for Array objects
 * @param {(elem: unknown, index: number, array: unknown[]) => void} callback
 */
function reverseForEach(callback) {
  this.reduceRight((_, elem, i, array) => callback(elem, i, array), null);
}

Array.prototype.reverseForEach = reverseForEach;

const numbers = [1, 2, 3, 4, 5];

numbers.reverseForEach((number, index) => {
  console.log(`Index ${index}: ${number}`);
});

export { reverseForEach };
