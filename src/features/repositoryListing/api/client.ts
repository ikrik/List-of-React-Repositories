import { gql } from '@apollo/client'

export const GET_REACT_REPOS_LIST = gql`
  query GetReactReposList($after: String, $before: String, $first: Int, $last: Int) {
    search(query: "React", type: REPOSITORY, first: $first, last: $last, after: $after, before: $before) {
      pageInfo {
        startCursor
        hasNextPage
        hasPreviousPage
        endCursor
      }
      repositoryCount
      edges {
        cursor
        node {
          ... on Repository {
            id
            name
            forkCount
            url
            stargazerCount
          }
        }
      }
    }
  }
`
