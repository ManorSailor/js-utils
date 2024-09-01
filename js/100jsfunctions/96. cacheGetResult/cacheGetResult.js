/**
 * Caches the result of the promise returned by the callback. Subsequent calls will not invoke the callback again
 * @param {() => Promise<unknown} getPromise
 * @returns {() => ReturnType<getPromise>}
 */
function cacheGetResult(getPromise) {
  let result;
  return () => (result ? result : getPromise().then((r) => (result = r)));
}

export { cacheGetResult };
