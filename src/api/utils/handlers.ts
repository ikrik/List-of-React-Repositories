const ignoreAborted: (callback: (e: any) => void) => (e: any) => void = (callback) => {
  return (error: any) => {
    if (error.name !== 'AbortError') {
      callback(error)
    }
  }
}

export default ignoreAborted
