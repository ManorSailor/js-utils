/**
 * Given an array of users & a user id, returns an array of users sorted in special order
 * @param {User[]} users
 * @param {string} currentUserId
 * @returns {User[]}
 * @example
 * ```js
 * customArraySort([{"id":"user3","age":50},{"id":"user8","age":50},{"id":"user5","age":49},{"id":"user2","age":18},{"id":"user9","age":17},{"id":"user10","age":13},{"id":"user11","age":14},{"id":"user13","age":34},{"id":"user14","age":30},{"id":"user12","age":35}], "user2") // [{"id":"user2","age":18},{"id":"user5","age":49},{"id":"user12","age":35},{"id":"user9","age":17},{"id":"user11","age":14},{"id":"user10","age":13},{"id":"user3","age":50},{"id":"user8","age":50},{"id":"user13","age":34},{"id":"user14","age":30}]
 * ```
 */
function customArraySort(users, currentUserId) {
  const curUser = users.find((usr) => usr.id === currentUserId);
  const minors = users
    .filter((usr) => usr.age < 18 && usr !== curUser)
    .sort((a, b) => b.age - a.age);
  const adults = users
    .filter((usr) => usr.age >= 18 && usr.age < 35 && usr !== curUser)
    .sort((a, b) => b.age - a.age);
  const lateAdults = users
    .filter((usr) => usr.age >= 35 && usr.age < 50 && usr !== curUser)
    .sort((a, b) => b.age - a.age);
  const seniors = users
    .filter((usr) => usr.age >= 50 && usr !== curUser)
    .sort((a, b) => b.age - a.age);

  return curUser
    ? [curUser, ...lateAdults, ...minors, ...seniors, ...adults]
    : [...lateAdults, ...minors, ...seniors, ...adults];
}

/**
 * @typedef User
 * @type {object}
 * @property {string} id
 * @property {number} age
 */

export { customArraySort };
