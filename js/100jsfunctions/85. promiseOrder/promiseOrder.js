/**
 * Returns an array of Promises with the indices of each promise within the array according to their resolve time
 * @param {Promise<unknown>[]} promises
 * @returns {Promise<number>[]}
 */
function promiseOrder(promises) {
  const timeBeforeSettlement = Date.now();
  const timeTaken = promises.map((promise, i) =>
    promise.then(() => ({
      origPos: i,
      timeTaken: Date.now() - timeBeforeSettlement,
    }))
  );

  return Promise.all(timeTaken)
    .then((timeTaken) =>
      timeTaken.toSorted((a, b) => a.timeTaken - b.timeTaken)
    )
    .then((sortedPromises) =>
      sortedPromises.reduce((orderArr, promise, newPos) => {
        orderArr[newPos] = promise.origPos;
        return orderArr;
      }, [])
    );
}

const wait = (millis) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), millis);
  });
};

promiseOrder([wait(100), wait(1000), wait(50)]).then((order) => {
  console.log(order); // [1, 2, 0]
});

export { promiseOrder };
