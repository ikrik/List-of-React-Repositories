import * as React from 'react'
import { RepositoryListingTableView } from '../model'
import useRepositoryListingData, { DEFAULT_REPO_LISTING_DATA_INTERFACE } from './hooks/useRepositoryListingData'

export interface IRepositoryListing {
  isRepositoryListLoading: boolean
  repositoryListing: RepositoryListingTableView[]
  listSize: number
  totalPages: number
  pageNumber: number
  disableNextPage: boolean
  disablePreviousPage: boolean
  onNextPageNavigation: () => void
  onPreviousPageNavigation: () => void
}

export const DEFAULT_REPOSITORY_LISTING_STORE: IRepositoryListing = {
  ...DEFAULT_REPO_LISTING_DATA_INTERFACE,
  listSize: 20,
  repositoryListing: DEFAULT_REPO_LISTING_DATA_INTERFACE.mappedRepositoryListing,
  onNextPageNavigation: DEFAULT_REPO_LISTING_DATA_INTERFACE.onNextPage,
  onPreviousPageNavigation: DEFAULT_REPO_LISTING_DATA_INTERFACE.onPreviousPage
}

export const RepositoryListingContext = React.createContext(DEFAULT_REPOSITORY_LISTING_STORE)

const RepositoryListingProvider: React.FunctionComponent = (props) => {
  const [listSize, setListSize] = React.useState<number>(DEFAULT_REPOSITORY_LISTING_STORE.listSize)
  const repoListiDataStore = useRepositoryListingData(listSize)

  return (
    <RepositoryListingContext.Provider
      value={{
        isRepositoryListLoading: repoListiDataStore.isRepositoryListLoading,
        repositoryListing: repoListiDataStore.mappedRepositoryListing,
        listSize,
        totalPages: repoListiDataStore.totalPages,
        pageNumber: repoListiDataStore.pageNumber,
        disableNextPage: repoListiDataStore.disableNextPage,
        disablePreviousPage: repoListiDataStore.disablePreviousPage,
        onNextPageNavigation: repoListiDataStore.onNextPage,
        onPreviousPageNavigation: repoListiDataStore.onPreviousPage
      }}
    >
      {props.children}
    </RepositoryListingContext.Provider>
  )
}

export default RepositoryListingProvider
