/**
 * Get formatted business address
 * @param {Business}
 * @returns {string}
 * @example
 * ```js
 * getBusinessAddress() //
 * ```
 */
function getBusinessAddress({ address: { street, number, zipCode } }) {
  return `${street}, number ${number}, ${zipCode}`;
}

/**
 * @typedef Business
 * @type {object}
 * @property {string} name
 * @property {Address} address

 */

/**
 * @typedef Address
 * @type {object}
 * @property {string} street
 * @property {number} number
 * @property {number} zipCode
 */

export { getBusinessAddress };
