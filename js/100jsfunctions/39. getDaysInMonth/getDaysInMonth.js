/**
 * Given a date, returns the number of days in the month given in date
 * @param {Date} date
 * @returns {number}
 * @example
 * ```js
 * getDaysInMonth("2024-02-15T10:00:00.000Z") // 29
 * ```
 * Note: Make sure you pass Date objects; Note date strs.
 */
function getDaysInMonth(date) {
  const curYear = date.getFullYear();
  const curMonth = date.getMonth();
  const prevDay = 0;

  // Found this neat trick: https://stackoverflow.com/a/69100190
  const prevDate = new Date(curYear, curMonth + 1, prevDay);

  return prevDate.getDate();
}

export { getDaysInMonth };
