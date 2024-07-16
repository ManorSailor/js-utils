/**
 * Given an object, returns a map of all object kv pairs
 * @param {Object<string, unknown | unknown[]>} object
 * @returns {Map<string, unknown | Map<string, unknown>>}
 */
function objectToMap(object) {
  return Object.entries(object).reduce((objMap, [key, val]) => {
    if (isPlainObject(val)) {
      objMap.set(key, objectToMap(val));
    } else if (Array.isArray(val)) {
      objMap.set(key, nestedObjsToMap(val));
    } else {
      objMap.set(key, val);
    }

    return objMap;
  }, new Map());
}

/**
 * Checks if a given value is a POJO or not
 * @param {Object.<string, unknown>} obj
 * @returns {boolean}
 */
function isPlainObject(obj) {
  return obj && typeof obj === "object" && !Array.isArray(obj);
}

/**
 * Given an array, transforms all POJOs within the array to Maps persisting non-POJO entities as is
 * @param {unknown[]} arr
 * @returns {Array<unknown | Map<string, unknown | unknown[]>>}
 */
function nestedObjsToMap(arr) {
  return arr.map((val) => {
    if (isPlainObject(val)) {
      return objectToMap(val);
    } else if (Array.isArray(val)) {
      return nestedObjsToMap(val);
    }
    return val;
  });
}

export { objectToMap };
