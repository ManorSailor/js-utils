/**
 * Function to throttle calls to a function upto 1000ms
 * @param {() => void} callback
 * @returns {(...params: unknown[]) => void}
 */
function throttle(callback) {
  let lastCallTime;

  return (...params) => {
    const currentTime = Date.now();
    const timeSinceLastCall = currentTime - lastCallTime;

    // Handle the edge case for the first call
    if (timeSinceLastCall > 1000 || !lastCallTime) {
      callback(...params);
      lastCallTime = Date.now();
    }
  };
}

export { throttle };
