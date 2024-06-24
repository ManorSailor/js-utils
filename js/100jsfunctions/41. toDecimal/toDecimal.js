/**
 * Given a string representation of a binary number, return the number in base 10 decimal form
 * @param {string} base2Number
 * @returns {number}
 * @example
 * ```js
 * toDecimal("1000111") // 71
 * ```
 */
function toDecimal(base2Number) {
  return base2Number.split('').reduceRight((decimalNum, num, pos) => {
    const power = (base2Number.length - (pos + 1));
    decimalNum += num * 2 ** power;
    return decimalNum;
  }, 0);

  //   return Number.parseInt(base2Number, 2);
  //   return Number(`0b${base2Number}`);
}

export { toDecimal };
