/**
 * Months To Wait From Start to End
 * @param {number} start
 * @param {number} end
 * @returns {number}
 * @example Feb to Apr
 * ```js
 * getMonthsNeededToWait(1, 3) // 2
 * ```
 * 1 = Feb, 3 = Apr. Months are zero-indexed.
 * @example Dec to Jan
 * ```js
 * getMonthsNeededToWait(11, 0) // 1
 * ```
 * @example Aug To Mar
 * ```js
 * getMonthsNeededToWait(7, 2) // 7
 * ```
 */
function getMonthsNeededToWait(start, end) {
  if (end > start) {
    return end - start;
  }

  if (start > end) {
    const nextYear = 12;
    const remainingMonths = start - end;
    return nextYear - remainingMonths;
  }
}

export { getMonthsNeededToWait };
