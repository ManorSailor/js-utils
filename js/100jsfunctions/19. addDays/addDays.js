/**
 * Given two dates, returns the month of the year in readable format
 * @param {Date} initialDate
 * @param {number} daysCount
 * @returns {Date}}
 * @example
 * ```js
 * addDays("2023-05-01T10:00:00.000Z", 11) // "2023-05-12T10:00:00.000Z"
 * ```
 * Note: Make sure you pass Date objects; Note date strs.
 */
function addDays(initialDate, daysCount) {
  return new Date(initialDate.setDate(initialDate.getDate() + daysCount));
}

export { addDays };
