/**
 * Observable factory function
 * @returns {Observable}
 */
function createObservable() {
  const observers = new Set();

  return {
    subscribe: (cb) => {
      observers.add(cb);
    },
    unsubscribe: (cb) => {
      observers.delete(cb);
    },
    notify: (data) => {
      observers.forEach((observer) => observer(data));
    },
  };
}

/**
 * @callback ObserverCallback
 * @param {unknown} data
 * @returns {void}
 */

/**
 * @typedef Observable
 * @type {object}
 * @prop {(cb: ObserverCallback) => void} subscribe
 * @prop {(cb: ObserverCallback) => void} unsubscribe
 * @prop {(data: unknown) => void} notify
 */

export { createObservable };
