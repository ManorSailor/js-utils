/**
 * Given multiple functions, returns a function called `run` which
 * @param {...(elem: unknown) => unknown} functions
 * @returns {(...params: unknown) => unknown}
 */
function flow(...functions) {
  return (...params) =>
    functions.reduce((result, funcA) => {
      result = funcA(...result);
      return [result];
    }, params)[0];
}

export { flow };
