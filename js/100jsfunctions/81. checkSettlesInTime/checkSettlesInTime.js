/**
 * Checks whether a Promise settles within the given time
 * @param {Promise<unknown>} promise
 * @param {number} maxTime - in milliseconds
 * @returns {Promise<boolean>}
 */
function checkSettlesInTime(promise, maxTime) {
  const timeBeforeSettlement = Date.now();

  const timeTaken = () => {
    const timeTaken = Date.now() - timeBeforeSettlement;
    return timeTaken <= maxTime;
  };

  return promise.then(timeTaken, timeTaken);
}

export { checkSettlesInTime };
