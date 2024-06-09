/**
 * Composes a new string from the given message that are given on position divisible by step
 * @param {string} message
 * @param {number} step
 * @returns {string}
 * @example
 * ```js
 * everyNPositions("Hello There", 2) // "HloTee"
 * ```
 */
function everyNPositions(message, step) {
  let newStr = "";

  for (let i = 0; i < message.length; i += step) {
    newStr += message[i];
  }

  return newStr;

  //   return message
  //     .split("")
  //     .filter((char, pos) => (pos % step === 0 ? char : ""))
  //     .join("");
}

export { everyNPositions };
