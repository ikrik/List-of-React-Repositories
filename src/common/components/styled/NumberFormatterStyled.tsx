import NumberFormat from 'react-number-format'
import styled from 'styled-components'

const NumberFormatterStyled = styled(NumberFormat)`
  color: ${(props) => (props.value && props.value < 0 ? '#f23030' : 'inherit')};
`
export default NumberFormatterStyled
