import * as React from 'react'
import Loader from 'react-loader-spinner'
import styled from 'styled-components'

const LoaderWrapper = styled.div`
  position: relative;
  display: flex;
  height: 100vh;
  margin: auto;
  align-items: center;
  align-self: center;
  justify-content: center;
`

const FullScreenLoader: React.FunctionComponent = () => {
  return (
    <LoaderWrapper>
      <Loader type='Oval' color='#0275d8' height={100} width={100} />
    </LoaderWrapper>
  )
}

export default FullScreenLoader
