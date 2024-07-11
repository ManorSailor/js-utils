/**
 * Return a new list of all the intervals merged in a non-overlapping manner
 * @param {Interval[]} intervals
 * @param {Interval[]} newIntervals
 * @returns {Interval[]}
 * @example
 * ```js
 * mergeIntervals([{"numbers":[10,13,19,20,21],"from":10,"to":21},{"numbers":[50,51],"from":50,"to":51},{"numbers":[100,101,102,103,104,105,106,107,108,109,110],"from":100,"to":110}], [{"numbers":[5,10,15],"from":5,"to":15},{"numbers":[500,600,700],"from":500,"to":700}]) // [{"numbers":[5,10,10,13,15,19,20,21],"from":5,"to":21},{"numbers":[50,51],"from":50,"to":51},{"numbers":[100,101,102,103,104,105,106,107,108,109,110],"from":100,"to":110},{"numbers":[500,600,700],"from":500,"to":700}]
 * ```
 */
function mergeIntervals(intervals, newIntervals) {
  const mergedIntervals = [...intervals, ...newIntervals].sort(
    (a, b) => a.from - b.from
  );

  const areIntervalsOverlapping = (a, b) => a.from <= b.to && a.to >= b.from;

  let index = 0;

  while (index < mergedIntervals.length - 1) {
    const currentInterval = mergedIntervals[index];
    const nextInterval = mergedIntervals[index + 1];

    if (areIntervalsOverlapping(currentInterval, nextInterval)) {
      const newInterval = {
        from: currentInterval.from,
        to: Math.max(currentInterval.to, nextInterval.to),
        numbers: [...currentInterval.numbers, ...nextInterval.numbers].sort(
          (a, b) => a - b
        ),
      };

      mergedIntervals.splice(index, 2, newInterval);
    } else {
      index++;
    }
  }

  return mergedIntervals;
}

/**
 * @typedef Interval
 * @type {object}
 * @prop {number} from - the smallest number in the interval
 * @prop {number} to - the biggest number in the interval
 * @prop {number[]} numbers - an Array of numbers in ascending order. All numbers are between from and to (inclusive).
 */

export { mergeIntervals };
