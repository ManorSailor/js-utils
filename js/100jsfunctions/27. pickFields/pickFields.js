/**
 * Given a data object & fields array, returns a new object containing only the fields specified in array
 * @param {Object.<string, any>} data
 * @param {string[]} fields
 * @returns {Object.<string, any>}
 * @example
 * ```js
 * pickFields({"color":"blue","name":"Earth","solarSistem":"Milky Way"}, ["name","color"]) // {"color":"blue","name":"Earth"}
 * ```
 */
function pickFields(data, fields) {
  return fields.reduce((newObj, field) => {
    if (Object.hasOwn(data, field)) {
      newObj[field] = data[field];
    }
    return newObj;
  }, {});
}

export { pickFields };
