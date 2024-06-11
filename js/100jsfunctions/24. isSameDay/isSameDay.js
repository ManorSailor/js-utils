/**
 * Given two Dates, returns if they are represent the same Dates
 * @param {Date} date1
 * @param {Date} date2
 * @returns {boolean}
 * @example
 * ```js
 * isSameDay("2007-11-10T10:00:00.000Z", "2007-11-10T10:00:00.000Z") // true
 * ```
 * Note: Parameters must of type Date
 */
function isSameDay(date1, date2) {
  return date1.toDateString() === date2.toDateString();
}

export { isSameDay };
