/**
 * Given a username, returns user's all closed PRs IDs
 * @param {string} username
 * @param {string} repo
 * @returns {Promise<string[] | []>}
 * @example
 * ```js
 * fetchClosedPullRequests("frontend-ro", "frontend-ro") // [1322945013,1309452760,1300248750,1300068424,1299732590,1299048290,1299028126,"And another 200 ids..."]
 * ```
 */
async function fetchClosedPullRequests(username, repo) {
  const fetchAllPaginatedPRs = async (closedPRRoute) => {
    const allClosedPRs = [];

    try {
      const res = await fetch(`${closedPRRoute}&per_page=100&page=1`, {
        headers: {
          accept: "application/vnd.github+json",
        },
      });
      const headerLink = res.headers.get("link");

      let currentPage = 1;

      const regex =
        /<https:\/\/api\.github\.com\/repositories\/\d+\/pulls\?state=closed&per_page=\d+&page=(\d+)>; rel="last"/i;
      const match = headerLink.match(regex);
      const lastPage = match[1];

      while (currentPage <= lastPage) {
        const closedPRs = fetch(
          `${closedPRRoute}&per_page=100&page=${currentPage}`,
          {
            headers: {
              accept: "application/vnd.github+json",
            },
          }
        ).then((res) => res.json());
        allClosedPRs.push(closedPRs);
        currentPage++;
      }
    } catch (error) {
      console.log(error);
    }

    return allClosedPRs;
  };

  const allClosedPRs = await fetchAllPaginatedPRs(
    `https://api.github.com/repos/${username}/${repo}/pulls?state=closed`
  );

  return Promise.all(allClosedPRs).then((...allPRs) =>
    allPRs.flat().map((d) => d.id)
  );
}

export { fetchClosedPullRequests };
