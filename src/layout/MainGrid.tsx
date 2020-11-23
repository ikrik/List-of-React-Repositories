import * as React from 'react'
import styled from 'styled-components'

import ContentWrapper from '../common/views/ContentWrapper'
import RepositoryListingProvider from '../features/repositoryListing/providers/RepositoryListingProvider'
import RepositoryListingMainView from '../features/repositoryListing/view/RepositoryListingMainView'

export const MainGridContainer = styled.div`
  min-width: 100%;
  height: 100%;
  display: inline-grid;
  grid-template-columns: 2em 1fr 2em;
  grid-template-rows: 100%;
  font-family: 'Roboto', sans-serif;
`

const MainGrid = () => {
  return (
    <MainGridContainer>
      <ContentWrapper>{React.cloneElement(<RepositoryListingProvider />, {}, <RepositoryListingMainView />)}</ContentWrapper>
    </MainGridContainer>
  )
}

export default MainGrid
