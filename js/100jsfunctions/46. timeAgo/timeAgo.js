/**
 * Given two dates, returns the amount of time passed between the given two dates in human readable format
 * @param {Date} date1
 * @param {Date} date2
 * @returns {string}
 * @example
 * ```js
 * timeAgo("2024-02-01T10:00:00.000Z", "2024-02-01T10:00:30.000Z") // "just now"
 * timeAgo("2024-02-01T10:00:00.000Z", "2024-02-01T05:23:00.000Z") // "4 hours ago"
 * ```
 * Note: Make sure you pass Date objects; Not date strings.
 */
function timeAgo(date1, date2) {
  const diffMs = Math.abs(date1 - date2);

  const ONE_MIN = 60 * 1000;
  const ONE_HOUR = ONE_MIN * 60;
  const ONE_DAY = ONE_HOUR * 24;
  const ONE_MONTH = ONE_DAY * 30;
  const ONE_YEAR = ONE_MONTH * 12;

  switch (!!diffMs) {
    case diffMs < ONE_MIN:
      return "just now";

    case diffMs < ONE_HOUR:
      const minutes = Math.floor(diffMs / ONE_MIN);
      const minuteStr = minutes === 1 ? "minute" : "minutes";
      return `${minutes} ${minuteStr} ago`;

    case diffMs < ONE_DAY:
      const hours = Math.floor(diffMs / ONE_HOUR);
      const hourStr = hours === 1 ? "hour" : "hours";
      return `${hours} ${hourStr} ago`;

    case diffMs < ONE_MONTH:
      const days = Math.floor(diffMs / ONE_DAY);
      const dayStr = days === 1 ? "day" : "days";
      return `${days} ${dayStr} ago`;

    case diffMs < ONE_YEAR:
      const months = Math.floor(diffMs / ONE_MONTH);
      const monthStr = months === 1 ? "month" : "months";
      return `${months} ${monthStr} ago`;

    default:
      return "more than a year ago";
  }
}

export { timeAgo };
