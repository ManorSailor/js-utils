/**
 * Given two dates, checks if the dates are within the same week
 * @param {Date} date1
 * @param {Date} date2
 * @returns {boolean}
 * @example
 * ```js Note: Week starts on Monday & ends on Sunday
 * isSameWeek("2024-01-11T10:00:00.000Z", "2024-01-14T11:00:00.000Z") // true
 * isSameWeek("2023-09-12T10:00:00.000Z", "2023-09-10T11:00:00.000Z") // false
 * ```
 * Note: Make sure you pass Date objects; Not date strings.
 */
function isSameWeek(date1, date2) {
  const ONE_DAY_MS = 86_400_000;
  const ONE_WEEK_MS = ONE_DAY_MS * 7;

  const startDate = new Date(
    date1.getFullYear(),
    date1.getMonth(),
    date1.getDate()
  );
  const dayOfWeek = date1.getDay() === 0 ? 6 : date1.getDay() - 1;

  const weekStart = new Date(startDate.getTime() - dayOfWeek * ONE_DAY_MS);
  const weekEnd = new Date(weekStart.getTime() + ONE_WEEK_MS - 1);

  return date2 >= weekStart && date2 <= weekEnd;
}

export { isSameWeek };
