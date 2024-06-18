/**
 * Given two objects of reactions, return an array of strings describing a change in users' reactions since yesterday
 * @param {Reaction} yesterdayReactions
 * @param {Reaction} todayReactions
 * @returns {string[]}
 * @example
 * ```js
 * diffReactions({"sam_developer":["laugh"],"iampava":["like","laugh"],"jon31":["dislike"]}, {"sam_developer":["like"],"iampava":["like","laugh"],"jon31":["dislike","cry"],"jjames":["like"]}) // ["jon31 reacted with cry","sam_developer reacted with like","sam_developer removed their laugh","jjames reacted with like"]
 * ```
 */
function diffReactions(yesterdayReactions, todayReactions) {
  const userReacts = [];

  const today = Object.entries(todayReactions);
  const yesterday = Object.entries(yesterdayReactions);

  const formatReaction = (username, react, removed = false) =>
    `${username} ${removed ? 'removed their' : 'reacted with'} ${react}`;

  today.forEach(([username, todayReacts]) => {
    todayReacts.forEach((react) => {
      if (!yesterdayReactions[username]?.includes(react)) {
        userReacts.push(formatReaction(username, react));
      }
    });
  });

  yesterday.forEach(([username, yesterdayReacts]) => {
    yesterdayReacts.forEach((react) => {
      if (!todayReactions[username]?.includes(react)) {
        userReacts.push(formatReaction(username, react, true));
      }
    });
  });

  return userReacts;
}

/**
 * @typedef Reaction
 * @type {Record<string, Array<"like" | "laugh" | "cry" | "dislike">>}
 */

export { diffReactions };
