import * as React from 'react'
import { IconsInterface } from './Icons'

const ForkIcon: React.FunctionComponent<IconsInterface> = (props: IconsInterface) => {
  return (
    <svg
      style={props.style}
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      width='24px'
      height='24px'
      viewBox='0 0 24 24'
      version='1.1'
    >
      <path d='M17,6.06a3,3,0,0,0-1.15,5.77A2,2,0,0,1,14,13.06H10a3.91,3.91,0,0,0-2,.56V7.88a3,3,0,1,0-2,0v8.36a3,3,0,1,0,2.16.05A2,2,0,0,1,10,15.06h4a4,4,0,0,0,3.91-3.16A3,3,0,0,0,17,6.06Zm-10-2a1,1,0,1,1-1,1A1,1,0,0,1,7,4.06Zm0,16a1,1,0,1,1,1-1A1,1,0,0,1,7,20.06Zm10-10a1,1,0,1,1,1-1A1,1,0,0,1,17,10.06Z' />
    </svg>
  )
}

export default ForkIcon
