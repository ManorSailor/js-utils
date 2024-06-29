/**
 * Returns the search query params from the given url
 * @param {string} numbers
 * @returns {Map<string, string>}
 * @example
 * ```js
 * parseQueryParams("https://www.example.com?order=asc&limit=10") // {{ <key>: "limit", <value>: "10" }, { <key>: "order", <value>: "asc" }}
 * ```
 */
function parseQueryParams(url) {
  const searchParams = new URL(url).searchParams;
  return new Map(searchParams);
}

export { parseQueryParams };
