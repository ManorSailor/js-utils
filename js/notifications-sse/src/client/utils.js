/**
 * EventSource factory. Allows reuse of the created "instance"
 * @param {string} route
 */
export function createEventSource(route) {
  let source;

  const connect = () => {
    if (!source) {
      source = new EventSource(route);
    }
  };

  const disconnect = () => {
    if (source) {
      source.close();
      source = undefined;
    }
  };

  const listenFor = (eventType, cb, opts) => {
    source?.addEventListener(eventType, cb, opts);
  };

  return {
    connect,
    disconnect,
    listenFor,
    get _sourceRef() {
      return source;
    },
  };
}
