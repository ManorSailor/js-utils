/**
 * Given an array of users, return a Map with desired group as keys & users as values
 * @param {User[]} users
 * @param {"month" | "day" | "year"} groupBy
 * @returns {Map.<number, User[]>}
 * @example
 * ```js
 * groupBirthdays([
 * { birthday: Date Mon May 10 1993 15:30:00 GMT+0530 (India Standard Time), name: "Lisa" },
 * { birthday: Date Sun Aug 01 1993 11:30:00 GMT+0530 (India Standard Time), name: "Maggy" },
 * { birthday: Date Tue Jan 10 1995 17:05:00 GMT+0530 (India Standard Time), name: "Sam" }], "year") 
 * ->
 * {"1993": [{ birthday: Date Mon May 10 1993 15:30:00 GMT+0530 (India Standard Time), name: "Lisa" }, { birthday: Date Sun Aug 01 1993 11:30:00 GMT+0530 (India Standard Time), name: "Maggy" }],
 * "1995": [{ birthday: Date Tue Jan 10 1995 17:05:00 GMT+0530 (India Standard Time), name: "Sam" }]}
 * ```
 */
function groupBirthdays(users, groupBy) {
  const groupsToMethods = {
    day: 'getDate',
    month: 'getMonth',
    year: 'getFullYear',
  };
  const dateMethod = groupsToMethods[groupBy];

  return users.reduce((userMap, user) => {
    const group =
      groupBy === 'month'
        ? user.birthday[dateMethod]() + 1
        : user.birthday[dateMethod]();

    const userGroup = userMap.get(group) ?? [];
    userGroup.push(user);

    userMap.set(group, userGroup);
    return userMap;
  }, new Map());
}

/**
 * @typedef User
 * @type {object}
 * @property {string} name
 * @property {Date} birthday
 */

export { groupBirthdays };
