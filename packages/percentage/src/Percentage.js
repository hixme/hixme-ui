
import React from 'react'
import PropTypes from 'prop-types'
import Text from '@hixme-ui/text'

const Percentage = ({
  children,
  hideDecimals,
  value,
  ...props
}) => (
  <Text {...props}>{Percentage.format({
    children,
    hideDecimals,
    value,
  })}</Text>
)

Percentage.format = (props) => {
  const { value, children, hideDecimals } = props
  let displayValue = parseFloat(value || children)

  displayValue *= 100

  if (hideDecimals) {
    displayValue = displayValue.toFixed(0)
  } else {
    displayValue = displayValue.toFixed(2)
  }

  return `${displayValue}%`
}

Percentage.propTypes = {
  children: PropTypes.node,
  hideDecimals: PropTypes.bool,
  value: PropTypes.number,
}

Percentage.defaultProps = {
  children: null,
  hideDecimals: false,
  value: null,
}

Percentage.displayName = 'Percentage'
Percentage.huiName = 'hui:Percentage'

export default Percentage
