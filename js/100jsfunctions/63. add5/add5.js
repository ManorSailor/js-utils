/**
 * HoF. Returns a function which adds 5 to the provided numberFD
 * @returns {(n: number) => number}
 */
function getAdd5() {
  return (n) => n + 5;
}

export { getAdd5 };
