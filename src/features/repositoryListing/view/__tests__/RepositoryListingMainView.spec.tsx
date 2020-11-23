import { cleanup, render } from '@testing-library/react'
import * as React from 'react'
import { RepositoryListingTableView } from '../../model'

import { DEFAULT_REPOSITORY_LISTING_STORE, RepositoryListingContext } from '../../providers/RepositoryListingProvider'
import RepositoryListingMainView from '../RepositoryListingMainView'

describe('Manual Inputs > Trade Op main view component tests', () => {
  afterEach(cleanup)

  it('renders empty state when payments data is not yet fetched', () => {
    const wrapper = render(
      <RepositoryListingContext.Provider
        value={{
          ...DEFAULT_REPOSITORY_LISTING_STORE,
          repositoryListing: [],
          isRepositoryListLoading: false
        }}
      >
        <RepositoryListingMainView />
      </RepositoryListingContext.Provider>
    )

    expect(wrapper.container.firstChild).toMatchSnapshot()
  })

  it('renders screen loader when the data is loading', () => {
    const wrapper = render(
      <RepositoryListingContext.Provider
        value={{
          ...DEFAULT_REPOSITORY_LISTING_STORE,
          isRepositoryListLoading: true
        }}
      >
        <RepositoryListingMainView />
      </RepositoryListingContext.Provider>
    )

    expect(wrapper.container.firstChild).toMatchSnapshot()
  })

  it('renders payments inputs table when the data is loaded', () => {
    const mockMappedRepositoryListing: RepositoryListingTableView[] = [
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
    const wrapper = render(
      <RepositoryListingContext.Provider
        value={{
          ...DEFAULT_REPOSITORY_LISTING_STORE,
          repositoryListing: mockMappedRepositoryListing
        }}
      >
        <RepositoryListingMainView />
      </RepositoryListingContext.Provider>
    )

    expect(wrapper.container.firstChild).toMatchSnapshot()
  })
})
