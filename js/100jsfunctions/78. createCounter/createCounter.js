/**
 * Create Counter Factory
 * @param {number} initialValue
 */
function createCounter(initialValue) {
  return {
    getValue: () => initialValue,
    increment: () => initialValue++,
    decrement: () => initialValue--,
  };
}

export { createCounter };
