/**
 * Checks whether a Promise settles within the given time
 * @param {Promise<unknown>} promise - guaranteed to resolve
 * @param {number} minResolveTime - in milliseconds
 * @returns {Promise<boolean>}
 */
function delayResolve(promise, minResolveTime) {
  const timeBeforeSettlement = Date.now();

  const calcRemainingWaitTime = (value) => {
    const timeTakenToResolve = Date.now() - timeBeforeSettlement;
    return minResolveTime - timeTakenToResolve;
  };

  return new Promise(async (resolve) => {
    const val = await promise;
    const remainingWaitTime = calcRemainingWaitTime(val);
    setTimeout(() => resolve(val), remainingWaitTime);
  });
}

export { delayResolve };
