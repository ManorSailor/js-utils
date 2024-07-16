/**
 * Creates a Queue data structure
 * @returns {Queue}
 */
function createQueue() {
  const Q = [];

  return {
    add: (val) => Q.push(val),
    remove: () => Q.shift(),
    list: () => Q, //structuredClone(Q),
  };
}

/**
 * @typedef Queue
 * @type {object}
 * @prop {(val: unknown) => void} add
 * @prop {() => unknown | undefined} remove
 * @prop {() => unknown[]} list
 */

export { createQueue };
