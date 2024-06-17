/**
 * Given a date, returns a formatted date according to the passed locale
 * @param {Date} date
 * @returns {number}
 * @example
 * ```js
 * formatDateTime("2024-01-04T12:37:00.000Z", "en-US") // "January 4, 2024 at 14:37"
 * formatDateTime("2024-05-22T19:37:00.000Z", "es-ES") // "22 de mayo de 2024, 22:37"
 * ```
 * Note: Make sure you pass Date objects; Note date strs.
 */
function formatDateTime(date, locale) {
  return new Intl.DateTimeFormat(locale, {
    dateStyle: 'long',
    timeStyle: 'short',
    hour12: false,
  }).format(date);
}

export { formatDateTime };
