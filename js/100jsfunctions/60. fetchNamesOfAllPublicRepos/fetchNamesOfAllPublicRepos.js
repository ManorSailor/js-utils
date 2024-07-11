/**
 * Given a username, returns user's all public repos
 * @param {string} username
 * @returns {Promise<string[] | []>}
 * @example
 * ```js
 * fetchNamesOfAllPublicRepos("iampava") // ["airmessage-web","code-for-talks-or-articles","conllu_core","convert-to-landscape","devtools-ds","document-picture-in-picture","documentation","file-system-utils","gatsby","gatsby-custom-createPage","Ghost","git-challenge-temp","git-github-practice-exercises","half-time-fe","iampava","imagemin-webp-webpack-plugin","javascript-conferences","js-heroes-website","lerna-playground","lexical","log-emoji-loader","lottie-web-parser","metrics","minwork-react","next.js","PafcalJS","picvice","practice-exercises","PWA-workshop","react-sliding-item","redaxios","resources-manifest-webpack-plugin","safari-flicker-bug-sticky","sandpack","Signal-Desktop","steal-like-a-dev","storybook","turborepo-playground","tw-checklist","web.dev"]
 * ```
 */
async function fetchNamesOfAllPublicRepos(username) {
  const route = `https://api.github.com/users/${username}/repos?per_page=100`;

  return fetch(route, {
    headers: {
      accept: "application/vnd.github+json",
    },
  })
    .then((res) => (res.ok ? res.json() : []))
    .then((data) => data.map((d) => d.name))
    .catch((err) => console.log(err));
}

export { fetchNamesOfAllPublicRepos };
