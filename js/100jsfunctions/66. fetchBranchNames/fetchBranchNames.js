/**
 * Given a username & repo, returns the repo's all branches
 * @param {string} username
 * @param {string} repo
 * @returns {Promise<string[] | []>}
 * @example
 * ```js
 * fetchBranchNames("frontend-ro", "frontend-ro") // ["api-to-ts","audioAndVideo","authentication","bugfix/lesson-exercise-spinner-overlaps","bugfix/safari-sticky-resources","bugfix-lesson/links-and-buttons","bugfix-lists","bugfixes-at-build","bugfixes-exercises-cards","contributors/swarup4741","And another 106 branches..."]
 * ```
 */
async function fetchBranchNames(username, repo) {
  const fetchAllPaginatedPRs = async (branchRoute) => {
    const allBranches = [];

    try {
      const res = await fetch(`${branchRoute}&per_page=100&page=1`, {
        headers: {
          accept: "application/vnd.github+json",
        },
      });
      const headerLink = res.headers.get("link");

      let currentPage = 1;

      const regex =
        /<https:\/\/api\.github\.com\/repositories\/\d+\/branches&per_page=\d+&page=(\d+)>; rel="last"/i;
      const match = headerLink.match(regex);
      const lastPage = match[1];

      while (currentPage <= lastPage) {
        const closedPRs = fetch(
          `${branchRoute}&per_page=100&page=${currentPage}`,
          {
            headers: {
              accept: "application/vnd.github+json",
            },
          }
        ).then((res) => res.json());
        allBranches.push(closedPRs);
        currentPage++;
      }
    } catch (error) {
      console.log(error);
    }

    return allBranches;
  };

  const allBranches = await fetchAllPaginatedPRs(
    `https://api.github.com/repos/${username}/${repo}/branches`
  );

  return Promise.all(allBranches).then((...allBranches) =>
    allBranches.flat().map((d) => d.name)
  );
}

export { fetchBranchNames };
