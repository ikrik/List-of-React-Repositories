import * as React from 'react'
import _ from 'lodash'
import { useLazyQuery } from '@apollo/client'

import ignoreAborted from '../../../../api/utils/handlers'
import { IPageInfo } from '../../../../common/api/model'

import { GET_REACT_REPOS_LIST } from '../../api/client'
import { mapRepositoryListingToTableView } from '../../mappers/mappers'
import { RepositoryListingTableView } from '../../model'

// interface ReportingListingDataParams {
//   listSize: number
// }

export interface RepositoryListingDataInterface {
  isRepositoryListLoading: boolean
  mappedRepositoryListing: RepositoryListingTableView[]
  totalPages: number
  pageNumber: number
  disableNextPage: boolean
  disablePreviousPage: boolean
  onNextPage: () => void
  onPreviousPage: () => void
}

export const DEFAULT_REPO_LISTING_DATA_INTERFACE: RepositoryListingDataInterface = {
  isRepositoryListLoading: false,
  mappedRepositoryListing: [],
  totalPages: 0,
  pageNumber: 0,
  disableNextPage: false,
  disablePreviousPage: false,
  onNextPage: _.noop,
  onPreviousPage: _.noop
}

const useRepositoryListingData: (listSize: number) => RepositoryListingDataInterface = (listSize) => {
  const [isRepositoryListLoading, setRepositoryListLoading] = React.useState<boolean>(
    DEFAULT_REPO_LISTING_DATA_INTERFACE.isRepositoryListLoading
  )
  const [repoList, setRepoList] = React.useState([])
  const [pageInfo, setPageInfo] = React.useState<IPageInfo | undefined>()
  const [totalRepoCount, setTotalRepoCount] = React.useState<number>(DEFAULT_REPO_LISTING_DATA_INTERFACE.totalPages)

  const [pageNumber, setPageNumber] = React.useState<number>(DEFAULT_REPO_LISTING_DATA_INTERFACE.pageNumber)

  // use mapper to tranform data for UI
  const mappedRepositoryListing = React.useMemo(() => {
    return repoList.map(mapRepositoryListingToTableView)
  }, [repoList])

  const [getRepoList, { loading, error }] = useLazyQuery(GET_REACT_REPOS_LIST, {
    variables: {},
    fetchPolicy: 'network-only',
    onCompleted: (d) => {
      setRepoList(d.search.edges)
      setPageInfo(d.search.pageInfo)
      if (!d.search.pageInfo.hasPreviousPage) {
        setPageNumber(1)
      }
      setTotalRepoCount(d.search.repositoryCount)
      setRepositoryListLoading(loading)
    },
    onError: ignoreAborted(() => {
      setRepositoryListLoading(loading)
      console.log(error)
    })
  })

  // On initial load
  React.useEffect(() => {
    setRepositoryListLoading(true)
    getRepoList({
      variables: {
        first: listSize
      }
    })
  }, [])

  const nextPage = () => {
    if (pageInfo?.hasNextPage) {
      setRepositoryListLoading(true)
      getRepoList({
        variables: {
          first: listSize,
          after: pageInfo.endCursor
        }
      })
      setPageNumber(pageNumber + 1)
    }
  }

  const previousPage = () => {
    if (pageInfo?.hasPreviousPage) {
      setRepositoryListLoading(true)
      getRepoList({
        variables: {
          last: listSize,
          before: pageInfo.startCursor
        }
      })
      setPageNumber(pageNumber - 1)
    }
  }

  const totalPages = React.useMemo(() => {
    return listSize ? Math.ceil(totalRepoCount / listSize) : 0
  }, [listSize, totalRepoCount])

  return {
    isRepositoryListLoading,
    mappedRepositoryListing,
    totalPages,
    disableNextPage: !pageInfo?.hasNextPage,
    disablePreviousPage: !pageInfo?.hasPreviousPage,
    pageNumber,
    onNextPage: nextPage,
    onPreviousPage: previousPage
  }
}

export default useRepositoryListingData
