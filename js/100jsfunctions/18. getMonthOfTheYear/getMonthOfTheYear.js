/**
 * Given a date, returns the month of the year in readable format
 * @param {Date} date
 * @returns {string}
 * @example
 * ```js
 * getMonthOfTheYear("2024-12-25T16:15:00.000Z") // "December"
 * ```
 * Note: Make sure you pass Date objects; Note date strs.
 */
function getMonthOfTheYear(date) {
  // Alternate approach is to use an array of months or an object literal
  return new Intl.DateTimeFormat("en-US", { month: "long" }).format(date);
}

export { getMonthOfTheYear };
