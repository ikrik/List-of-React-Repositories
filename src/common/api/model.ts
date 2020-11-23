export interface IPageInfo {
  endCursor?: string
  hasNextPage?: boolean
  hasPreviousPage?: boolean
  startCursor?: string
}

export interface ISearch<T> {
  edges: T[]
  pageInfo?: IPageInfo
}
