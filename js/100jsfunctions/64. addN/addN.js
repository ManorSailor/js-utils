/**
 * HoF. Returns a function which adds N to the provided n
 * @param {number} N
 * @returns {(n: number) => number}
 */
function getAddN(N) {
  return (n) => n + N;
}

export { getAddN };
