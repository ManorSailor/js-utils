/**
 * Returns an obfuscated string replacing each character & the number of times it appears. (unless it only appears once)
 * @param {string} text
 * @returns {string}
 * @example
 * ```js
 * simpleCompression("Aaaabbbcccdeee") // "Aa3b3c3de3"
 * ```
 */
function simpleCompression(text) {
  const chars = text.split("");
  let newStr = "";
  let charCount = 0;
  let lastChar = "";

  for (let i = 0; i < chars.length; i++) {
    const curChar = chars[i];

    if (lastChar === curChar) {
      charCount++;
    } else {
      newStr += `${lastChar}${charCount > 1 ? charCount : ""}`;
      lastChar = curChar;
      charCount = 1;
    }

    if (i === chars.length - 1) {
      newStr += curChar;

      if (charCount > 1) {
        newStr += charCount;
      }
    }
  }

  return newStr;
}

export { simpleCompression };
