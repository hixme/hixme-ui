
import React from 'react'
import PropTypes from 'prop-types'
import Text from '@hixme-ui/text'

const Currency = ({
  children,
  defaultSymbol,
  hideCents,
  hideCommas,
  noSymbol,
  round,
  value,
  ...props
}) => (
  <Text {...props}>{Currency.format({
    children,
    defaultSymbol,
    hideCents,
    hideCommas,
    noSymbol,
    round,
    value,
  })}</Text>
)

Currency.roundToSignificantFigures = value => (
  (value >= 100000 || value <= -100000) ?
    Math.round(value / 1000) * 1000 :
    Math.round(value)
)

Currency.getValue = (props = {}) => {
  const { value, children, hideCents, round } = props

  const property = value !== null && !isNaN(value) ? value : children
  const displayValue = parseFloat(property)
  if (isNaN(displayValue)) {
    console.error(`${Currency.huiName}: Could not parse ${property} for currency amount.`)
    return null
  }

  const roundedValue = hideCents ? displayValue.toFixed(0) : displayValue.toFixed(2)
  const result = round ? Currency.roundToSignificantFigures(roundedValue) : roundedValue
  return result
}

Currency.format = (props = {}) => {
  const { hideCommas, defaultSymbol, noSymbol } = props
  const symbol = defaultSymbol || Currency.defaultProps.defaultSymbol
  const roundedValue = Currency.getValue(props)

  if (!roundedValue) {
    return symbol
  }
  const formattedValue = noSymbol
      ? roundedValue
      : symbol + roundedValue

  return hideCommas ? formattedValue : formattedValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

Currency.propTypes = {
  children: PropTypes.node,
  defaultSymbol: PropTypes.string,
  hideCents: PropTypes.bool,
  hideCommas: PropTypes.bool,
  noSymbol: PropTypes.bool,
  round: PropTypes.bool,
  value: PropTypes.number,
}

Currency.defaultProps = {
  children: null,
  defaultSymbol: '$',
  hideCents: false,
  hideCommas: false,
  noSymbol: false,
  round: false,
  value: null,
}

Currency.displayName = 'Currency'
Currency.huiName = 'hui:Currency'

export default Currency
