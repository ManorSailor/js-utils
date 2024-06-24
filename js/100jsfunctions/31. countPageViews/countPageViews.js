/**
 * Returns the number of page views of the given country from the provided array between the specified dates
 * @param {PageViews[]} pageViews
 * @param {string} country
 * @param {Interval} interval
 * @returns {number}
 * @example
 * ```js
 * countPageViews(
 * [{"date":"2023-05-10T10:00:00.000Z","country":"RO","count":104},
 * {"date":"2023-05-07T10:00:00.000Z","country":"RO","count":67},
 * {"date":"2023-05-10T10:00:00.000Z","country":"CA","count":89},
 * {"date":"2023-05-12T12:00:00.000Z","country":"RO","count":500}],
 * "RO",
 * {"endDate":"2023-05-12T10:00:00.000Z","startDate":"2023-05-01T10:00:00.000Z"}) // 171
 * ```
 */
function countPageViews(pageViews, country, { startDate, endDate }) {
  return pageViews
    .filter(
      (pv) =>
        pv.country === country && pv.date >= startDate && pv.date <= endDate
    )
    .reduce((count, pv) => pv.count + count, 0);
}

/**
 * @typedef PageViews
 * @type {object}
 * @property {Date} date
 * @property {string} country
 * @property {number} count
 */

/**
 * @typedef Interval
 * @type {object}
 * @property {Date} startDate
 * @property {Date} endDate
 */

export { countPageViews };
