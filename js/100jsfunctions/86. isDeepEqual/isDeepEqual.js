/**
 * Given two objects, checks if they are deep equal or not
 * @param {Object.<string, any> | any[] | Map<any, any>} data
 * @returns {boolean}
 */
function isDeepEqual(object1, object2) {
  switch (true) {
    case isArray(object1) && isArray(object2):
      return (
        object1.length === object2.length &&
        object1.every((item, i) => isDeepEqual(item, object2[i]))
      );

    case isDate(object1) && isDate(object2):
      return object1.getTime() === object2.getTime();

    case isMap(object1) && isMap(object2):
      const map1Entries = [...object1.entries()];
      const map2Entries = [...object2.entries()];
      return isDeepEqual(map1Entries, map2Entries);

    case isObject(object1) && isObject(object2):
      const object1Entries = Object.entries(object1);
      const object2Entries = Object.entries(object2);
      return isDeepEqual(object1Entries, object2Entries);

    default:
      return object1 === object2;
  }
}

function isObject(value) {
  return (
    !isArray(value) &&
    !isMap(value) &&
    !isDate(value) &&
    value !== null &&
    typeof value === "object"
  );
}

function isMap(value) {
  return value instanceof Map;
}

function isDate(value) {
  return value instanceof Date;
}

function isArray(value) {
  return Array.isArray(value);
}

export { isDeepEqual };
