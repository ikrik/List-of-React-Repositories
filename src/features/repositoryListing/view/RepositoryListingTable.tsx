import * as React from 'react'

import { Caption, Table, Thead, Tr, Th, Tbody, Td } from '@bootstrap-styled/v4'
import { RepositoryListingDescriptor } from '../model'
import { RepositoryListingContext } from '../providers/RepositoryListingProvider'
import repositoryListingDescriptors from './descriptors/repositoryListingDescriptors'

type RepositoryListingKeys = Pick<RepositoryListingDescriptor, 'forkCount' | 'name' | 'stargazerCount'>

const RepositoryListingTable: React.FunctionComponent = () => {
  const { isRepositoryListLoading, repositoryListing } = React.useContext(RepositoryListingContext)

  return (
    <>
      {isRepositoryListLoading ? (
        <p>Loading...</p>
      ) : (
        <Table>
          <Caption>List of Github React Repositories</Caption>
          <Thead>
            <Tr color='active'>
              {Object.keys(repositoryListingDescriptors).map((k) => {
                return (
                  <Th key={repositoryListingDescriptors[k as keyof RepositoryListingKeys].label}>
                    {repositoryListingDescriptors[k as keyof RepositoryListingKeys].label}
                  </Th>
                )
              })}
            </Tr>
          </Thead>
          <Tbody>
            {repositoryListing.map((rl, index) => {
              const myKey: number = index + 1
              return (
                <Tr key={myKey}>
                  {Object.keys(repositoryListingDescriptors).map((k) => {
                    return (
                      <Td
                        key={repositoryListingDescriptors[k as keyof RepositoryListingKeys].label}
                        align={repositoryListingDescriptors[k as keyof RepositoryListingKeys].label}
                      >
                        {repositoryListingDescriptors[k as keyof RepositoryListingKeys].render(rl)}
                      </Td>
                    )
                  })}
                </Tr>
              )
            })}
          </Tbody>
        </Table>
      )}
    </>
  )
}

export default RepositoryListingTable
