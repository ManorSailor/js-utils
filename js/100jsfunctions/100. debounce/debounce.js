/**
 * Function to debounce calls to 1000ms
 * @param {() => void} callback
 * @returns {(...params: unknown[]) => void}
 */
function debounce(callback) {
  let timerID;

  return (...params) => {
    clearTimeout(timerID);
    timerID = setTimeout(() => callback(...params), 1000);
  };
}

export { debounce };
