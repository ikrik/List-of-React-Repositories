import * as React from 'react'

import NumberFormatterStyled from './styled/NumberFormatterStyled'
import NumberFormat, { NumberFormatProps } from 'react-number-format'

interface NumberFormatterProps {
  precision?: number
  value: number
  unit?: string
  negative?: boolean
  highlightNegative?: boolean
}

const NumberFormatter: React.FunctionComponent<NumberFormatterProps> = (props: NumberFormatterProps) => {
  const { value, precision, unit, negative, highlightNegative } = props
  const numValue = negative ? -Math.abs(value) : value

  const commonProps: NumberFormatProps = {
    value: numValue,
    thousandSeparator: true,
    displayType: 'text',
    decimalScale: precision === undefined ? 0 : precision,
    suffix: unit,
    fixedDecimalScale: true
  }

  return highlightNegative ? <NumberFormatterStyled {...commonProps} /> : <NumberFormat {...commonProps} />
}

NumberFormatter.defaultProps = {
  highlightNegative: true
}

export default NumberFormatter
