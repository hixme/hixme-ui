import React from 'react'
import PropTypes from 'prop-types'
import Price from '@hixme-ui/price'
import getLabel from './getLabel'
import getPrice from './getPrice'

const BenefitPrice = ({
  noLabel,
  payCycle,
  value,
  ...restProps
}) => (
  <Price
    value={getPrice(value, payCycle)}
    label={getLabel(payCycle)}
    {...restProps} 
  />
)
      
BenefitPrice.displayName = 'hui:BenefitPrice'
BenefitPrice.huiName = 'BenefitPrice'

BenefitPrice.propTypes = {
  value: PropTypes.number.isRequired,
  noLabel: PropTypes.bool,
  payCycle: PropTypes.number,
}

BenefitPrice.defaultProps = {
  noLabel: false,
  payCycle: 12,
}

export default BenefitPrice
