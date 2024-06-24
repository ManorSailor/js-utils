/**
 * Given a username, returns the Github Account name for that user if exist
 * @param {string} username
 * @returns {Promise<string | null>}
 * @example
 * ```js
 * fetchGithubName("addyosmani") // "Addy Osmani"
 * fetchGithubName("asdfgwaifdh") // null
 * ```
 */
async function fetchGitHubName(username) {
  const route = `https://api.github.com/users/${username}`;

  return fetch(route, {
    headers: {
      accept: 'application/vnd.github+json',
    },
  })
    .then((res) => (res.ok ? res.json() : { name: null }))
    .then((data) => data.name)
    .catch((err) => console.log(err));
}

export { fetchGitHubName };
