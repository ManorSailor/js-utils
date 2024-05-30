/**
 * Get formatted user object
 * @param {string} firstName
 * @param {string} lastName
 * @param {number} age
 * @returns {User}
 * @example
 * ```js
 * getUserObject() //
 * ```
 */
function getUserObject(firstName, lastName, age) {
  return { age, name: `${firstName} ${lastName}` };
}

/**
 * @typedef User
 * @type {object}
 * @property {string} name
 * @property {number} age
 */

export { getUserObject };
