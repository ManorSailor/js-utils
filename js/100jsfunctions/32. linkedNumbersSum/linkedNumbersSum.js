/**
 * Returns sum of all numbers of the given linked list
 * @param {Node[]} node
 * @returns {number}
 * @example
 * ```js
 * linkedNumbersSum({"next":{"next":{"next":null,"value":3},"value":2},"value":1}) // 6
 * ```
 */
function linkedNumbersSum(node) {
  let sum = 0;
  let nextNode = node;

  while (nextNode) {
    sum += nextNode.value;
    nextNode = nextNode.next;
  }

  return sum;
  //   if (!node) return 0;
  //   return node.value + linkedNumbersSum(node.next);
}

/**
 * @typedef Node
 * @type {object}
 * @property {number} value
 * @property {Node} next
 */

export { linkedNumbersSum };
