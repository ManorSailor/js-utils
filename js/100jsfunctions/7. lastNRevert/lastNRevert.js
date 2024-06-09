/**
 * Get last N chars of a string in reverse order
 * @param {string} str
 * @param {number} n
 * @returns {string}
 * @example
 * ```js
 * lastNRevert("T-shirts", 4) // stri
 * ```
 * @example Returns the full reversed str when n > str.length or n is a negative integer
 * ```js
 * lastNRevert("Hello", 11) // olleH
 * lastNRevert("Hello", -11) // olleH
 * ```
 */
function lastNRevert(str, n) {
  let revStr = "";
  const endChar = str.length - 1;
  const nthChar = Math.abs(n) <= str.length ? str.length - n : 0;

  for (let i = endChar; i >= nthChar; i--) {
    revStr += str[i]; // or str.charAt(i)
  }

  return revStr;
  //   return str.split("").slice(-n).reverse().join("");
}

export { lastNRevert };
