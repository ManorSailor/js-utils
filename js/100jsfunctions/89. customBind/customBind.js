/**
 * Custom Bind function which is used to extend the Function.prototype
 * @param {unknown} newThis
 * @param {unknown[]} params
 */
function customBind(newThis, params) {
  return this.bind(newThis, ...params);
}

export { customBind };
