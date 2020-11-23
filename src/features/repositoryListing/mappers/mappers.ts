import { IRepositoryListingItem } from '../api/model'
import { RepositoryListingTableView } from '../model'

export const mapRepositoryListingToTableView: (input: IRepositoryListingItem) => RepositoryListingTableView = (
  input: IRepositoryListingItem
) => {
  return {
    id: input.node.id,
    name: input.node.name,
    forkCount: input.node.forkCount,
    stargazerCount: input.node.stargazerCount,
    url: input.node.url
  }
}
