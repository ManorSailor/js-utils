/**
 * Given an array of employees, returns array of only developers
 * @param {Employee[]} employees
 * @returns {Employee & { job: 'developer' }[]}
 * @example
 * ```js
 * getDevelopers() //
 * ```
 */
function getDevelopers(employees) {
  return employees.filter((emp) => emp.job === "developer");
}

/**
 * @typedef Employee
 * @type {object}
 * @property {string} name
 * @property {('designer' | 'developer' | 'manager')} job
 * @property {number} age
 */

export { getDevelopers };
