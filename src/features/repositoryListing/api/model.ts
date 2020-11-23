import { ISearch } from '../../../common/api/model'

export interface IRepositoryInfo {
  forkCount: number
  id: string
  name: string
  stargazerCount: number
  url: string
}

export interface IRepositoryListingItem {
  cursor: string
  node: IRepositoryInfo
}

export interface IRepositoryListingSearch {
  search: ISearch<IRepositoryListingItem>
}
