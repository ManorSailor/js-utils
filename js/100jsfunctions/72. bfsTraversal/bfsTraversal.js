/**
 * Given a Binary Tree of Numbers, returns its values in levelOrder aka BF order
 * @param {BinaryTree} root
 * @returns {number[]}
 * @example
 * ```js
 * bfsTraversal({"left":{"left":{"left":{"value":8},"right":{"value":9},"value":4},"right":{"value":5},"value":2},"right":{"left":{"left":{"value":10},"right":{"value":11},"value":6},"right":{"value":7},"value":3},"value":1}) // [1,2,3,4,5,6,7,8,9,10,11]
 * ```
 */
function bfsTraversal(root) {
  const Q = [root];
  const lvlOrderValues = [];

  while (Q.length) {
    const root = Q.shift();
    lvlOrderValues.push(root.value);

    root.left && Q.push(root.left);
    root.right && Q.push(root.right);
  }

  return lvlOrderValues;
}

/**
 * @typedef BinaryTree
 * @type {object}
 * @prop {number} value
 * @prop {BinaryTree} left
 * @prop {BinaryTree} right
 */

export { bfsTraversal };
