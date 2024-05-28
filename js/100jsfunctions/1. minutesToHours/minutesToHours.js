/**
 * Converts Minutes to Hours
 * @param {number} minutes - Total Minutes
 * @returns {number}
 * @example Convert 150 minutes to hours
 * ```js
 * minutesToHours(150) // 2.5
 * ```
 * @example Doesn't floor the return value
 * ```js
 * minutesToHours(100) // 1.666666667
 * ```
 */
function minutesToHours(minutes) {
  const MINUTES_IN_HOUR = 60;
  return minutes / MINUTES_IN_HOUR;
}

export { minutesToHours };
