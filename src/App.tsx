import * as React from 'react'
import { ApolloProvider } from '@apollo/client'

import Client from './api/client'
import MainGrid from './layout/MainGrid'

const App: React.FunctionComponent = () => {
  return (
    <ApolloProvider client={Client}>
      <MainGrid />
    </ApolloProvider>
  )
}

export default App
