/**
 * Returns a new array of User objects that would exist on the requested page
 * @param {User[]} users
 * @param {keyof User} sortBy
 * @param {"asc" | "desc"} direction
 * @param {number} perPage
 * @param {number} pageNumber
 * @returns {User[] | []}
 * @example
 * ```js
 * getPaginatedData([{"name":"Bob","id":"user1","age":29},{"name":"Pava","id":"user2","age":30},{"name":"Diana","id":"user3","age":21},{"name":"Hendra","id":"user4","age":41},{"name":"Luna","id":"user5","age":8}], "age", "desc", 2, 3) // [{"name":"Luna","id":"user5","age":8}]
 * ```
 */
function getPaginatedData(users, sortBy, direction, perPage, pageNumber) {
  const comparator = (a, b) => (a === b ? 0 : a < b ? -1 : 1);

  users = users.toSorted((uA, uB) =>
    direction === "asc"
      ? comparator(uA[sortBy], uB[sortBy])
      : comparator(uB[sortBy], uA[sortBy])
  );

  const endIdx = perPage * pageNumber;
  const startIdx = endIdx - perPage;

  return users.slice(startIdx, endIdx);
}

/**
 * @typedef User
 * @type {object}
 * @prop {string} id
 * @prop {string} name
 * @prop {number} age
 */

export { getPaginatedData };
