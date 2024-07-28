/**
 * LinkedList factory
 * @param {number[]} initialNumbers
 * @returns {LinkedList}
 */
function createLinkedList(initialNumbers) {
  let head = null;
  let tail = null;

  const Node = (val, next = null) => ({ next, value: val });

  initialNumbers.reduceRight((_, num) => {
    const curNode = Node(num, head);
    head = curNode;
    if (!tail) tail = head;
  }, null);

  return {
    push: (val) => {
      const lastNode = Node(val);
      tail.next = lastNode;
      tail = lastNode;
    },
    unshift: (val) => {
      const newHead = Node(val, head);
      head = newHead;
    },
    getStart: () => head,
  };
}

/**
 * @typedef LinkedList
 * @type {object}
 * @prop {number} value
 * @prop {LinkedList} next
 */

export { createLinkedList };
