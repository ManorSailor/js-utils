/**
 * Get last N chars of a string in reverse order
 * @param {string} str
 * @param {number} n
 * @returns {string}
 * @example
 * ```js
 * lastNRevert("T-shirts", 4) // stri
 * ```
 */
function lastNRevert(str, n) {
  let revStr = "";
  const endChar = str.length - 1;
  const nthChar = str.length - n;

  for (let i = endChar; i >= nthChar; i--) {
    revStr += str[i] ?? ""; // or str.charAt(i)
  }
  return revStr;
  //   return str.split("").slice(-n).reverse().join("");
}

export { lastNRevert };
