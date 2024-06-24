/**
 * Given a map of users' contact list, returns a new map with each user's contact list including only missing users
 * @param {Map<User, Contacts>} contactsMap
 * @returns {Map<User, Contacts>}
 * @example
 * ```js
 * getMissingContacts({{"user1": ["user2", "user3"]}, {"user2": []}, {"user3": []}}) // {{"user1": []}, {"user2": ["user1", "user3"]}, {"user3": ["user1", "user2"]}}
 * ```
 * Note: Argument must be of type Map. Using literal for example only.
 */
function getMissingContacts(contactsMap) {
  const newContactsMap = new Map();
  const users = Array.from(contactsMap.keys());

  contactsMap.forEach((contacts, user) => {
    const contactsSet = new Set(contacts);

    const missingContacts = users.filter(
      (otherUser) => otherUser !== user && !contactsSet.has(otherUser)
    );

    newContactsMap.set(user, missingContacts);
  });

  return newContactsMap;
}

/**
 * @typedef User
 * @type {string}
 */

/**
 * @typedef Contacts
 * @type {User[]}
 */

export { getMissingContacts };
