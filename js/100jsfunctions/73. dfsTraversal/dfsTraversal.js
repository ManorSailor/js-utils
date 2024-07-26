/**
 * Given a Binary Tree of Numbers, returns its values in preOrder aka DF order
 * @param {BinaryTree} root
 * @returns {number[]}
 * @example
 * ```js
 * dfsTraversal({"left":{"left":{"left":{"value":8},"right":{"value":9},"value":4},"right":{"value":5},"value":2},"right":{"left":{"left":{"value":10},"right":{"value":11},"value":6},"right":{"value":7},"value":3},"value":1}) // [1,2,4,8,9,5,3,6,10,11,7]
 * ```
 */
function dfsTraversal(root) {
  if (!root) return [];

  const leftVals = dfsTraversal(root.left);
  const rightVals = dfsTraversal(root.right);

  return [root.value, ...leftVals, ...rightVals];
}

/**
 * @typedef BinaryTree
 * @type {object}
 * @prop {number} value
 * @prop {BinaryTree} left
 * @prop {BinaryTree} right
 */

export { dfsTraversal };
