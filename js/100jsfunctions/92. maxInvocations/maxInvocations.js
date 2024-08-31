/**
 * Decorator function  which stops functions from being invoked past n times
 * @returns {(...args: unknown) => unknown}
 */
function maxInvocations(maxInvocations) {
  const boundFn = (...args) => {
    if (boundFn.count >= maxInvocations) {
      return;
    }
    boundFn.count++;
    return this(...args);
  };

  boundFn.count = 0;

  return boundFn;
}

export { maxInvocations };
