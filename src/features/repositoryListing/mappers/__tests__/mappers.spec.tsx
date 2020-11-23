import { IRepositoryListingItem } from '../../api/model'
import { mapRepositoryListingToTableView } from '../mappers'
import { RepositoryListingTableView } from '../../model'

describe('repository listing mapper test', () => {
  it('correctly map repository listing item to table view', () => {
    const repositoryListingItem: IRepositoryListingItem = {
      cursor: 'Y3Vyc29yOjE=',
      node: {
        id: 'MDEwOlJlcG9zaXRvcnk3MDEwNzc4Ng==',
        name: 'next.js',
        forkCount: 9625,
        url: 'https://github.com/vercel/next.js',
        stargazerCount: 57473
      }
    }

    const tableViewResult: RepositoryListingTableView = {
      id: 'MDEwOlJlcG9zaXRvcnk3MDEwNzc4Ng==',
      name: 'next.js',
      forkCount: 9625,
      url: 'https://github.com/vercel/next.js',
      stargazerCount: 57473
    }

    const tableView = mapRepositoryListingToTableView(repositoryListingItem)

    expect(tableView).toEqual(tableViewResult)
  })
})
