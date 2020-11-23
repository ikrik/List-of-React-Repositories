import { cleanup, render } from '@testing-library/react'
import { mount } from 'enzyme'
import * as React from 'react'
import FullScreenLoader from '../../../../common/components/FullScreenLoader'
import { RepositoryListingTableView } from '../../model'

import { DEFAULT_REPOSITORY_LISTING_STORE, RepositoryListingContext } from '../../providers/RepositoryListingProvider'
import RepositoryListingTable from '../RepositoryListingTable'

const mockMappedRepositoryList: RepositoryListingTableView[] = [
  {
    id: 'ydhsnmmXjash=',
    forkCount: 988327,
    name: 'React-native',
    stargazerCount: 93288,
    url: 'https://github.com/React-native'
  },
  {
    id: 'ydeweXjash=',
    forkCount: 32756,
    name: 'babel-react',
    stargazerCount: 156788,
    url: 'https://github.com/babel-react'
  },
  {
    id: 'ydhggmmXjash=',
    forkCount: 34998,
    name: 'next.js',
    stargazerCount: 288,
    url: 'https://github.com/next'
  }
]

describe('Repository table List data tests', () => {
  afterEach(cleanup)

  it('renders empty state when repository List data is not yet fetched', () => {
    const wrapper = render(
      <RepositoryListingContext.Provider
        value={{
          ...DEFAULT_REPOSITORY_LISTING_STORE,
          repositoryListing: [],
          isRepositoryListLoading: false
        }}
      >
        <RepositoryListingTable />
      </RepositoryListingContext.Provider>
    )

    expect(wrapper.container.firstChild).toMatchSnapshot()
  })

  it('renders loader when loading data', () => {
    const wrapper = mount(
      <RepositoryListingContext.Provider
        value={{
          ...DEFAULT_REPOSITORY_LISTING_STORE,
          isRepositoryListLoading: true
        }}
      >
        <RepositoryListingTable />
      </RepositoryListingContext.Provider>
    )
    expect(wrapper.containsMatchingElement(<FullScreenLoader />)).toEqual(true)
  })

  it('check if selection function is triggered', () => {
    const { getByText } = render(
      <RepositoryListingContext.Provider
        value={{
          ...DEFAULT_REPOSITORY_LISTING_STORE,
          repositoryListing: mockMappedRepositoryList,
          isRepositoryListLoading: false
        }}
      >
        <RepositoryListingTable />
      </RepositoryListingContext.Provider>
    )

    const selectedRepoName = getByText('babel-react') as HTMLAnchorElement

    expect(selectedRepoName.href).toBe('https://github.com/babel-react')
  })
})
