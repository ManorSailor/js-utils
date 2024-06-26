/**
 * Given an array of numbers & move instructions, modify & return the array in place according to move instructions
 * @param {number[]} numbers
 * @param {MoveInstructions[]} moveInstructions
 * @returns {number[]}
 * @example
 * ```js
 * moveItems() //
 * ```
 * Note to self: It's not a move. It's a shift! The description could have been more clear
 */
function moveItems(numbers, moveInstructions) {
  moveInstructions.forEach(({ fromIndex, toIndex }) => {
    const temp = numbers[fromIndex];

    numbers.splice(fromIndex, 1);
    numbers.splice(toIndex, 0, temp);
  });

  return numbers;
}

/**
 * @typedef MoveInstructions
 * @type {object}
 * @property {number} fromIndex
 * @property {number} toIndex
 */

export { moveItems };
