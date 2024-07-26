/**
 * Given an object, returns a Deep Copy of the object
 * @param {Object.<string, any> | any[] | Map<any, any>} data
 * @returns {Object.<string, any> | any[] | Map<any, any>}
 */
function deepCopy(object) {
  switch (true) {
    case isArray(object):
      return object.map((val) => deepCopy(val));

    case isMap(object):
      return [...object.entries()].reduce((newMap, [key, val]) => {
        newMap.set(key, deepCopy(val));
        return newMap;
      }, new Map());

    case isObject(object):
      return Object.entries(object).reduce((newObj, [key, val]) => {
        newObj[key] = deepCopy(val);
        return newObj;
      }, {});

    default:
      return object;
  }
}

function isObject(value) {
  return (
    !isArray(value) &&
    !isMap(value) &&
    !isSet(value) &&
    value !== null &&
    typeof value === "object"
  );
}

function isMap(value) {
  return value instanceof Map;
}

function isSet(value) {
  return value instanceof Set;
}

function isArray(value) {
  return Array.isArray(value);
}

export { deepCopy };
