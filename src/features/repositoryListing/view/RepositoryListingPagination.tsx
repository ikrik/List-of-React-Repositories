import * as React from 'react'
import styled from 'styled-components'

import { Button } from '@bootstrap-styled/v4'

interface IRepositoryListingPagination {
  totalPages: number
  pageNumber: number
  disableNextPage: boolean
  disablePreviousPage: boolean
  nextPage: () => void
  previousPage: () => void
}

const PaginationWrapper = styled.div`
  width: 100%;
  padding: 1em 0;
  display: flex;
  justify-content: space-between;
`

const ButtonWrapper = styled.div`
  flex: 0 1 auto;
`

const PagesInfoWrapper = styled.div`
  flex: 0 1 auto;
  padding: 0.5em 0;
`

const RepositoryListingPagination = (props: IRepositoryListingPagination) => {
  const { totalPages, pageNumber, disablePreviousPage, disableNextPage, nextPage, previousPage } = props
  return totalPages === 0 ? (
    <></>
  ) : (
    <PaginationWrapper>
      <ButtonWrapper>
        <Button disabled={disablePreviousPage} onClick={previousPage} color='primary'>
          Previous Page
        </Button>
      </ButtonWrapper>
      <PagesInfoWrapper>
        {pageNumber}/{totalPages} pages
      </PagesInfoWrapper>
      <ButtonWrapper>
        <Button disabled={disableNextPage} onClick={nextPage} color='primary'>
          Next Page
        </Button>
      </ButtonWrapper>
    </PaginationWrapper>
  )
}

export default RepositoryListingPagination
