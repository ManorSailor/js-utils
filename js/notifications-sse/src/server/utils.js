/**
 * Generates a notification
 */
export function generateNotification() {
  const id = crypto.randomUUID();
  return {
    id,
    event: "notifications",
    severity: getSeverityLvl(),
    content: `Notification says: ${Math.floor(Math.random() * 100)}`,
  };
}

/**
 * Create a message in SSE defined structure
 * @param {Record<string, unknown> | unknown} data
 * @param {string | undefined} event
 * @param {string | undefined} id
 * @returns {string}
 */
export function createMsg(data, event, id) {
  id ??= "";
  event ??= "";
  return `id: ${id}\nevent: ${event}\ndata: ${JSON.stringify(data)}\n\n`;
}

/**
 * Returns a random severity level
 * @returns {"low" | "med" | "high"}
 */
function getSeverityLvl() {
  const severityLevels = ["low", "med", "high"];
  const randomVal = Math.floor(Math.random() * severityLevels.length);
  return severityLevels[randomVal];
}
