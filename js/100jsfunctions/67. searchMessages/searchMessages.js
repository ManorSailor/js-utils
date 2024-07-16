/**
 * Given an array of messages & a searchTerm, find all messages in descending order that matches at least 1 of the searchTerm
 * @param {Message[]} messages
 * @param {string} searchTerm
 * @returns {Message[]}
 */
function searchMessages(messages, searchTerm) {
  const searchTerms = searchTerm.split(" ");
  const filteredMsgs = messages.filter((msg) =>
    searchTerms.some((term) => msg.body.includes(term))
  );

  filteredMsgs.sort((msgA, msgB) => {
    const msgAMatchCount = searchTerms
      .flatMap((searchTerm) => [...msgA.body.matchAll(searchTerm)])
      .join(""); // We join the arrays here to compare the length of string instead of arrays
    const msgBMatchCount = searchTerms
      .flatMap((searchTerm) => [...msgB.body.matchAll(searchTerm)])
      .join("");

    if (msgAMatchCount.length < msgBMatchCount.length) {
      return 1;
    } else if (msgAMatchCount.length > msgBMatchCount.length) {
      return -1;
    }

    if (msgA.sentAt < msgB.sentAt) {
      return 1;
    } else if (msgB.sentAt > msgA.sentAt) {
      return -1;
    }

    return 0;
  });

  return filteredMsgs;
}

/**
 * @typedef Message
 * @type {object}
 * @prop {string} body
 * @prop {Date} sentAt
 */

export { searchMessages };
