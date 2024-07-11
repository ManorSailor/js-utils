/**
 * Given a data object & a string path, returns the value at the given path else undefined
 * @param {Object.<string, unknown>} data
 * @param {string} path
 * @returns {unknown | undefined}
 * @example
 * ```js
 * pickNested({"address":{"country":"USA","city":"New York"},"name":"Bob","age":31}, "address.country") // "USA"
 * pickNested({"countries":[{"capital":"Helsinki","name":"Finland"},{"capital":"Berlin","name":"Germany"},{"capital":"Amsterdam","name":"Netherlands"}]}, "countries.2.capital") // "Amsterdam"
 * ```
 */
function pickNested(data, path) {
  const paths = path.split(".");

  let nestedVal = data;

  for (const path of paths) {
    if (!Object.hasOwn(nestedVal, path)) {
      return undefined;
    }

    // Object.hasOwn treats array indices as own properties
    // string is just an array of chars, thus, it returns true eg: Object.hasOwn("abc", "2")
    // JS design decisions always surprise me
    if (typeof nestedVal === "string" && Number.isInteger(+path)) {
      nestedVal = undefined;
    } else {
      nestedVal = nestedVal[path];
    }
  }

  return nestedVal;
}

export { pickNested };
