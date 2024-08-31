/**
 * PubSub factory function
 * @returns {PubSub}
 */
function createPubSub() {
  const events = new Map();

  return {
    publish: (eventId, eventData) => {
      const observers = events.get(eventId);
      observers?.forEach((observer) => observer(eventData));
    },
    subscribe: (eventId, cb) => {
      if (!events.has(eventId)) {
        events.set(eventId, new Set());
      }

      const observers = events.get(eventId);
      observers.add(cb);

      return () => observers.delete(cb);
    },
  };
}

/**
 * @callback PublisherCallback
 * @param {unknown} eventData
 * @returns {void}
 */

/**
 * @callback UnsubscribeCallback
 * @returns {void}
 */

/**
 * @typedef PubSub
 * @type {object}
 * @prop {(eventId: string, eventData: unknown) => void} publish
 * @prop {(eventId: string, cb: PublisherCallback) => UnsubscribeCallback} subscribe
 */

export { createPubSub };
