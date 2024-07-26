/**
 * HoF. Returns a function which doubles the closured n
 * @param {number} n
 * @returns {() => number}
 */
function getDoubleN(n) {
  return () => (n *= 2);
}

export { getDoubleN };
