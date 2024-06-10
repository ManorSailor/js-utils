/**
 * Given two dates, returns number of milliseconds between them
 * @param {Date} date1
 * @param {Date} date2
 * @returns {number}
 * @example
 * ```js
 * getMillisecondsBetween("2005-03-02T10:01:15.000Z", "2005-03-02T10:00:05.000Z") // 70000
 * ```
 * Note: Make sure you pass Date objects; Note date strs.
 */
function getMillisecondsBetween(date1, date2) {
  return date1 > date2 ? date1 - date2 : date2 - date1;
}

export { getMillisecondsBetween };
