import { cleanup, fireEvent, render } from '@testing-library/react'
import { mount } from 'enzyme'
import * as React from 'react'

import RepositoryListingPagination from '../RepositoryListingPagination'

describe('Manual Inputs > Trade Op main view component tests', () => {
  afterEach(cleanup)

  it('renders nothing when totalPages is zero', () => {
    const wrapper = mount(
      <RepositoryListingPagination
        totalPages={0}
        pageNumber={1}
        disableNextPage={false}
        disablePreviousPage={false}
        nextPage={jest.fn()}
        previousPage={jest.fn()}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('renders pagination when totalPage is bigger than 0', () => {
    const wrapper = mount(
      <RepositoryListingPagination
        totalPages={5}
        pageNumber={1}
        disableNextPage={false}
        disablePreviousPage={false}
        nextPage={jest.fn()}
        previousPage={jest.fn()}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('previous page is clicked', () => {
    const spyPrevious = jest.fn()

    const { getByText } = render(
      <RepositoryListingPagination
        totalPages={5}
        pageNumber={1}
        disableNextPage={false}
        disablePreviousPage={false}
        nextPage={jest.fn()}
        previousPage={spyPrevious}
      />
    )
    expect(spyPrevious).toHaveBeenCalledTimes(0)
    const previousPageButton = getByText('Previous Page')
    fireEvent.click(previousPageButton)
    expect(spyPrevious).toHaveBeenCalledTimes(1)
  })

  it('next page is clicked', () => {
    const spyNext = jest.fn()
    const spyPrevious = jest.fn()

    const { getByText } = render(
      <RepositoryListingPagination
        totalPages={5}
        pageNumber={1}
        disableNextPage={false}
        disablePreviousPage={false}
        nextPage={spyNext}
        previousPage={spyPrevious}
      />
    )
    expect(spyNext).toHaveBeenCalledTimes(0)
    const nextPageButton = getByText('Next Page')
    fireEvent.click(nextPageButton)
    expect(spyNext).toHaveBeenCalledTimes(1)
  })

  it('previous page button not clickable when disablePreviousPage is true', () => {
    const spyNext = jest.fn()
    const spyPrevious = jest.fn()

    const { getByText } = render(
      <RepositoryListingPagination
        totalPages={5}
        pageNumber={1}
        disableNextPage={false}
        disablePreviousPage={true}
        nextPage={spyNext}
        previousPage={spyPrevious}
      />
    )
    expect(spyPrevious).toHaveBeenCalledTimes(0)
    const previousPageButton = getByText('Previous Page')
    fireEvent.click(previousPageButton)
    expect(spyPrevious).toHaveBeenCalledTimes(0)
  })

  it('next page button not clickable when disableNextPage is true', () => {
    const spyNext = jest.fn()
    const spyPrevious = jest.fn()

    const { getByText } = render(
      <RepositoryListingPagination
        totalPages={5}
        pageNumber={1}
        disableNextPage={true}
        disablePreviousPage={false}
        nextPage={spyNext}
        previousPage={spyPrevious}
      />
    )
    expect(spyNext).toHaveBeenCalledTimes(0)
    const nextPageButton = getByText('Next Page')
    fireEvent.click(nextPageButton)
    expect(spyNext).toHaveBeenCalledTimes(0)
  })
})
