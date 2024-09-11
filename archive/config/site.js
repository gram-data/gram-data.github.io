module.exports = {
  title: `Neo4j Developer Tools`,
  description: `Technical information about how they work, and how to extend them.`,
  author: `@gram-data`,
  siteUrl: `https://gram-data.github.io`,
  githubApiToken: process.env.GITHUB_API_TOKEN,
  githubApiQuery: `query ($number_of_repos: Int!) {
    repositoryOwner(login: "gram-data") {
      avatarUrl,
      repositories(last: $number_of_repos, privacy: PUBLIC, orderBy: { field: STARGAZERS, direction:ASC } ) {
        nodes {
          name
          description
          homepageUrl
          forkCount
          createdAt
          updatedAt
          resourcePath
          languages(last: 1, orderBy: { field: SIZE, direction:ASC } ) {
            edges {
              node {
                name
                color
              }
            }
          }
          licenseInfo {
            name
          }
          stargazers {
            totalCount
          }
        }
      }
    }
  }`,
  githubApiVariables: {
    number_of_repos: 12,
  },
}
