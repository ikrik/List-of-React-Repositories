import * as React from 'react'
import { A, P } from '@bootstrap-styled/v4'

import NumberFormatter from '../../../../common/components/NumberFormatter'
import { Omit } from '../../../../common/types'
import { RepositoryListingTableView, RepositoryListingDescriptor } from '../../model'

const repositoryListingDescriptors: Omit<RepositoryListingDescriptor, 'url' | 'id'> = {
  name: {
    label: 'Name',
    render: (data: RepositoryListingTableView) => (
      <A target='_blank' href={data.url}>
        {data.name}
      </A>
    )
  },
  stargazerCount: {
    label: 'Stars',
    render: (data: RepositoryListingTableView) => <NumberFormatter value={data.stargazerCount ?? 0} />
  },
  forkCount: {
    label: 'Forks',
    render: (data: RepositoryListingTableView) => <NumberFormatter value={data.forkCount ?? 0} />
  }
}

export default repositoryListingDescriptors
