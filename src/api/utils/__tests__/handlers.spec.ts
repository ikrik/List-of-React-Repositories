import ignoreAborted from '../handlers'

it('executes the callback when request was not aborted', () => {
  const error = new Error()
  error.name = 'NotAbortError'

  const spyCallback = jest.fn()
  expect(spyCallback).toBeCalledTimes(0)
  ignoreAborted(spyCallback)(error)
  expect(spyCallback).toBeCalledTimes(1)
})

it('does not execute the callback when request was aborted', () => {
  const error = new Error()
  error.name = 'AbortError'

  const spyCallback = jest.fn()
  expect(spyCallback).toBeCalledTimes(0)
  ignoreAborted(spyCallback)(error)
  expect(spyCallback).toBeCalledTimes(0)
})
