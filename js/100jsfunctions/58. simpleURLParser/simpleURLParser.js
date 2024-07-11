/**
 * Checks if the given URL matches the given route pattern
 * @param {string} route
 * @param {string} url
 * @returns {boolean}
 * @example
 * ```js
 * simpleURLParser("/users/:userId", "/users/1234") // true
 * simpleURLParser("/users/:userId/books/:bookId", "/users/1234/books") // false
 * ```
 */
function simpleURLParser(route, url) {
  // Splitting allows us to match length of content in the url with that of route
  const routeContent = route.split("/");
  const urlContent = url.split("/");

  if (urlContent.length !== routeContent.length) {
    return false;
  }

  const placeholderRegex = /^[0-9a-z\-]+$/i;

  return routeContent.every((content, i) =>
    content[0] === ":"
      ? placeholderRegex.test(urlContent[i])
      : content === urlContent[i]
  );
}

export { simpleURLParser };
