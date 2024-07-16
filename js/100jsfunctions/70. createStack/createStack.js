/**
 * Creates a Stack data structure
 * @returns {Stack}
 */
function createStack() {
  const Q = [];

  return {
    add: (val) => Q.unshift(val),
    remove: () => Q.shift(),
    list: () => Q, //structuredClone(Q),
  };
}

/**
 * @typedef Stack
 * @type {object}
 * @prop {(val: unknown) => void} add
 * @prop {() => unknown | undefined} remove
 * @prop {() => unknown[]} list
 */

export { createStack };
