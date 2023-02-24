const githubQuery = (pageCount, queryString, paginationKeyword, paginationString, user, orderBy) => {

  return {
    query: `
    {
      viewer {
        name
      }
      search(
        query: "${queryString} user:${user} sort:${orderBy}"
        type: REPOSITORY
        ${paginationKeyword}: ${pageCount}, ${paginationString}
      ) {
        edges {
          cursor
          node {
            ... on Repository {
              name
              description
              id
              url
              viewerSubscription
              licenseInfo {
                spdxId  
              }
              createdAt
              updatedAt
            }
          }
        }
        pageInfo {
          startCursor
          endCursor
          hasNextPage
          hasPreviousPage
        }
        repositoryCount
      }
    }
    `,
  };
};

export default githubQuery;
