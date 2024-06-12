/**
 * Given an array of employees & department, return the highest paid employee of that department
 * @param {Employee[]} employees
 * @param {string} departmentId
 * @returns {string | undefined}
 * @example
 * ```js
 * getHighestPaidEmployee([{"departmentId":"A110","name":"Alice","salary":7611},{"departmentId":"A504","name":"David","salary":6100}], "A504") // "David"
 * ```
 */
function getHighestPaidEmployee(employees, departmentId) {
  return employees
    .filter((emp) => emp.departmentId === departmentId)
    .sort((empA, empB) => empB.salary - empA.salary)
    .at(0)?.name;

  //   let highestPaid = undefined;

  //   for (const employee of employees) {
  //     if (employee.departmentId === departmentId) {
  //       if (!highestPaid) {
  //         highestPaid = employee;
  //       }

  //       if (employee.salary > highestPaid.salary) {
  //         highestPaid = employee;
  //       }
  //     }
  //   }

  //   return highestPaid?.name;
}

/**
 * @typedef Employee
 * @type {object}
 * @property {string} name
 * @property {string} departmentId
 * @property {number} salary
 */

export { getHighestPaidEmployee };
