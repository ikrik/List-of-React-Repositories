import CSS from 'csstype'

import ForkIcon from './fork'
import StargazerIcon from './stargazer'

export interface IconsInterface {
  style?: CSS.Properties
  fillColor?: string
}

export { ForkIcon as Fork, StargazerIcon as Stargazer }
