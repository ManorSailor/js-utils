/**
 * HoF. Returns a callback which checks if the provided string matches with the password "saved" in the closure
 * @param {string} password
 * @returns {(str: string) => boolean}
 */
function getCheckPassword(password) {
  return (str) => str === password;
}

export { getCheckPassword };
