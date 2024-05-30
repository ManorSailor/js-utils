/**
 * Get formatted user object
 * @param {User} user
 * @param {Car} car
 * @returns {boolean}
 */
function canDriveCar({ age }, { engineSize }) {
  return age >= 18 || engineSize < 1000;
}

/**
 * @typedef User
 * @type {object}
 * @property {string} name
 * @property {number} age
 */

/**
 * @typedef Car
 * @type {object}
 * @property {string} name
 * @property {number} engineSize
 */

export { canDriveCar };
