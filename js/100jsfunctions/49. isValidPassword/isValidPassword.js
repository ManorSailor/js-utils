/**
 * Returns whether the given password string contains at least 3 uppercase letters, 1 number & 1 special char
 * @param {string} password
 * @returns {boolean}
 * @example
 * ```js
 * isValidPassword("abc123") // false
 * isValidPassword("ABC!3") // true
 * ```
 */
function isValidPassword(password) {
  const has3UppercaseChars = password.match(/[A-Z]/g)?.length >= 3;
  const has1Number = password.match(/[0-9]/g)?.length >= 1;
  const has1SpecialChar = password.match(/[_!?*]/g)?.length >= 1;

  return has3UppercaseChars && has1Number && has1SpecialChar;
}

export { isValidPassword };
