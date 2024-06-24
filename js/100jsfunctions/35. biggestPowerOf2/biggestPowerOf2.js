/**
 * Returns the biggest possible power of 2 which when raised is less than or equal to provided number
 * @param {number} number
 * @returns {number}
 * @example
 * ```js
 * biggestPowerOf2(12) // 3
 * ```
 * @example Returns -1 in case of negative numbers
 * ```js
 * biggestPowerOf2(0) // -1
 * biggestPowerOf2(-2) // -1
 * ```
 */
function biggestPowerOf2(number) {
  let biggestPower = 0;
  let square = 2 ** biggestPower;

  while (square <= number) {
    biggestPower++;
    square = 2 ** biggestPower;
  }

  return biggestPower - 1;
}

export { biggestPowerOf2 };
