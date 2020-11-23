import { mount } from 'enzyme'
import * as React from 'react'

import NumberFormatter from '../NumberFormatter'

const mockedValue = 15.162

it('does not render decimal numbers when precision is not defined', () => {
  const wrapper = mount(<NumberFormatter value={mockedValue} />)

  const span = wrapper.find('span').first()
  expect(span.getDOMNode().textContent).toBe('15')
})

it('correctly rounds the number to match the desired precision', () => {
  const wrapper = mount(<NumberFormatter value={mockedValue} precision={1} />)

  const span = wrapper.find('span').first()
  expect(span.getDOMNode().textContent).toBe('15.2')
})

it('correctly appends empty decimal places to match the desired precision', () => {
  const wrapper = mount(<NumberFormatter value={15} precision={2} />)

  const span = wrapper.find('span').first()
  expect(span.getDOMNode().textContent).toBe('15.00')
})
