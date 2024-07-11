/**
 * Return a list of all the intervals during working hours (9:00 - 17:00) in which we have no meetings sorted in ascending order
 * @param {Meeting[]} meetings
 * @returns {Meeting[]}
 * @example
 * ```js
 * findFreeCalendarSpots([
  { duration: 45, startTime: { hours: 16, minutes: 0 } },
  { duration: 30, startTime: { hours: 9, minutes: 30 } },
  { duration: 180, startTime: { hours: 13, minutes: 0 } },
  { duration: 30, startTime: { hours: 9, minutes: 0 } },
  { duration: 60, startTime: { hours: 11, minutes: 0 } },
]);
[
  { duration: 60, startTime: { hours: 10, minutes: 0 } },
  { duration: 60, startTime: { hours: 12, minutes: 0 } },
  { duration: 15, startTime: { hours: 16, minutes: 45 } },
];
 * ```
 */
function findFreeCalendarSpots(meetings) {
  const dayStart = { hours: 9, minutes: 0 };
  const dayEnd = { hours: 17, minutes: 0 };

  /** @param {StartTime} startTime @returns {number} */
  const toMinutes = ({ hours, minutes }) => hours * 60 + minutes;

  /** @param {number} minutes @returns {StartTime} */
  const toStartTime = (minutes) => ({
    hours: Math.floor(minutes / 60),
    minutes: minutes % 60,
  });

  // Sort the meetings in ascending order for easier processing ahead
  meetings = meetings.toSorted(
    (mA, mB) => toMinutes(mA.startTime) - toMinutes(mB.startTime)
  );

  const freeSlots = [];
  let lastMeetingEnd = toMinutes(dayStart);

  meetings.forEach((nextMeeting) => {
    const nextMeetingStart = toMinutes(nextMeeting.startTime);
    const nextMeetingEnd = nextMeetingStart + nextMeeting.duration;

    if (lastMeetingEnd < nextMeetingStart) {
      freeSlots.push({
        duration: nextMeetingStart - lastMeetingEnd,
        startTime: toStartTime(lastMeetingEnd),
      });
    }

    lastMeetingEnd = nextMeetingEnd;
  });

  if (lastMeetingEnd < toMinutes(dayEnd)) {
    freeSlots.push({
      duration: toMinutes(dayEnd) - lastMeetingEnd,
      startTime: toStartTime(lastMeetingEnd),
    });
  }

  return freeSlots;
}

/**
 * @typedef Meeting
 * @type {object}
 * @prop {number} duration
 * @prop {StartTime} startTime
 */

/**
 * @typedef StartTime
 * @type {object}
 * @prop {number} hours
 * @prop {number} minutes
 */

export { findFreeCalendarSpots };
