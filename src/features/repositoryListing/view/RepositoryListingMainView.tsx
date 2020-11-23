import * as React from 'react'
import styled from 'styled-components'
import { RepositoryListingContext } from '../providers/RepositoryListingProvider'
import RepositoryListingPagination from './RepositoryListingPagination'
import RepositoryListingTable from './RepositoryListingTable'

const RepositoryListingMainWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  align-self: center;
`

const RepositoryListingMainView: React.FunctionComponent = () => {
  const {
    isRepositoryListLoading,
    totalPages,
    pageNumber,
    disableNextPage,
    disablePreviousPage,
    onPreviousPageNavigation,
    onNextPageNavigation
  } = React.useContext(RepositoryListingContext)
  return (
    <RepositoryListingMainWrapper>
      <RepositoryListingTable />
      <RepositoryListingPagination
        totalPages={totalPages}
        pageNumber={pageNumber}
        disableNextPage={disableNextPage}
        disablePreviousPage={disablePreviousPage}
        nextPage={onNextPageNavigation}
        previousPage={onPreviousPageNavigation}
      />
    </RepositoryListingMainWrapper>
  )
}

export default RepositoryListingMainView
