import React from 'react'
import PropTypes from 'prop-types'

// hixme-ui
import Container from '@hixme-ui/container'
import Text from '@hixme-ui/text'

import StyledDollarSign from './StyledDollarSign'
import StyledDollars from './StyledDollars'
import StyledCents from './StyledCents'

const Price = ({
  label,
  value,
  includeCommas,
  ...restProps
}) => {
  const getValue = num => ({
    dollars: parseFloat(num).toFixed(2).split('.')[0],
    cents: parseFloat(num).toFixed(2).split('.')[1],
  })

  const getColor = val => (val < 0)
  return (
    <Container flex alignStart noPadding>
      <Container flex alignCenter flexColumn margin='5px 0' noPadding>
        <Container flex noPadding>
          <StyledDollarSign id='dollar-sign' blue={getColor(value)} {...restProps}>$</StyledDollarSign>
          <StyledDollars id='dollars' blue={getColor(value)} {...restProps}>
            {includeCommas ?
              getValue(value).dollars.replace(/\B(?=(\d{3})+(?!\d))/g, ',') :
              getValue(value).dollars
            }
          </StyledDollars>
          <StyledCents id='cents' blue={getColor(value)} {...restProps}>
            .
            {getValue(value).cents}
          </StyledCents>
        </Container>
        {label !== '' &&
          <Container margin='-10px 0 0 0' noPadding>
            <Text id='label' fontSize='8pt' light>{label}</Text>
          </Container>
        }
      </Container>
    </Container>
  )
}

Price.propTypes = {
  value: PropTypes.number.isRequired,
  label: PropTypes.string,
  includeCommas: PropTypes.bool,
}

Price.defaultProps = {
  label: '',
  includeCommas: false,
}

Price.displayName = 'hui:Price'
Price.huiName = 'Price'

export default Price
