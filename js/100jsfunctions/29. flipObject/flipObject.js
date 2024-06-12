/**
 * Given an object of people mapped to their jobs, returns an object with jobs as keys & names as values
 * @param {Object.<string, string>} people
 * @returns {Object.<string, string>}
 * @example
 * ```js
 * flipObject({"nick":"UX Designer","bob":"JS Developer","jon":"JS Developer","alice":"AI Engineer"}) // {"JS Developer":["bob","jon"],"AI Engineer":["alice"],"UX Designer":["nick"]}
 * ```
 */
function flipObject(people) {
  return Object.entries(people).reduce((newObj, [name, job]) => {
    if (!newObj[job]) {
      newObj[job] = [];
    }
    newObj[job].push(name);
    return newObj;
  }, {});
}

export { flipObject };
