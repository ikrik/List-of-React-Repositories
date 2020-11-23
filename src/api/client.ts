import { ApolloClient, InMemoryCache, createHttpLink, ApolloLink, NormalizedCacheObject } from '@apollo/client'

import { setContext } from '@apollo/client/link/context'

const token = process.env.REACT_APP_GITHUB_TOKEN

// Instantiate required constructor fields
const cache: InMemoryCache = new InMemoryCache()
const httpLink: ApolloLink = createHttpLink({
  uri: 'https://api.github.com/graphql'
})

const authLink: ApolloLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: token ? `bearer ${token}` : ''
    }
  }
})

const Client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache: cache,
  link: authLink.concat(httpLink)
})

export default Client
