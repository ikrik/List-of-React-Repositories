import { TableColumnDescriptor } from '../../common/models'

export interface RepositoryListingTableView {
  id: string
  forkCount: number
  name: string
  stargazerCount: number
  url?: string
}

export type RepositoryListingDescriptor = {
  [P in keyof RepositoryListingTableView]: TableColumnDescriptor<RepositoryListingTableView>
}
