import React from 'react'
import PropTypes from 'prop-types'

import Price from '@hixme-ui/price'

const BenefitPrice = ({
  noLabel,
  payCycle,
  value,
  ...restProps
}) => {
  const getLabel = () => {
    if (noLabel) {
      return ''
    } else if (payCycle === 12) {
      return 'monthly'
    } else if (payCycle === 24) {
      return 'semi-monthly'
    } else if (payCycle === 26) {
      return 'bi-weekly'
    } else if (payCycle === 52) {
      return 'weekly'
    }
    return ''
  }

  const getPrice = () => (value * 12) / payCycle

  return (
    <Price {...restProps} value={getPrice()} label={getLabel()} />
  )
}

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
