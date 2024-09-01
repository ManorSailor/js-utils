/**
 * Function which creates a Curry Factory
 * @param {(...params: unknown[]) => unknown} callback
 * @returns {(...params: unknown[]) => unknown}
 */
function getCurry(callback) {
  const curriedFn = (...params) => {
    if (params.length) {
      return callback();
    }

    return (data) => {
      if (!data) {
        return callback(...params);
      }

      return curriedFn(...params, data);
    };
  };

  return curriedFn;
}

export { getCurry };
