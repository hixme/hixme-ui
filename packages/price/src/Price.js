import React from 'react'
import PropTypes from 'prop-types'

// hixme-ui
// import FlexContainer from '../FlexContainer'
import Text from '@hixme-ui/text'

import { fontFamily, colorTheme } from '@hixme-ui/theme'

class Price extends Text {
  static displayName = 'hui:Price'
  static huiName = 'Price'

  getProps() {
    const {
      value,
      label,
    } = this.props

    return Object.assign({}, super.getProps(), {
      value,
      label,
    })
  }

  getValue() {
    return {
      dollars: parseFloat(this.props.value).toFixed(2).split('.')[0],
      cents: parseFloat(this.props.value).toFixed(2).split('.')[1],
    }
  }

  render() {
    const dollarSignProps = {
      style: Object.assign(
        {},
        this.getStyles(),
        {
          fontSize: '15pt',
          padding: '0 5px 0 0',
          fontFamily: fontFamily.thin,
        },
        ((this.getProps().value < 0) ? { color: colorTheme.blue } : {}),
      ),
    }
    const dollarProps = {
      style: Object.assign(
        {},
        this.getStyles(),
        {
          margin: '-10px 0 0 0',
          fontSize: '32pt',
          fontFamily: fontFamily.bolder,
        },
        ((this.getProps().value < 0) ? { color: colorTheme.blue } : {}),
      ),
    }
    const centProps = {
      style: Object.assign(
        {},
        this.getStyles(),
        {
          fontSize: '13pt',
          fontFamily: fontFamily.bolder,
        },
        ((this.getProps().value < 0) ? { color: colorTheme.blue } : {}),
      ),
    }

    return (
      <FlexContainer alignContent='flex-start'>
        <FlexContainer margin='5px 0' alignItems='center' justifyContent='flex-start' direction='column'>
          <FlexContainer>
            <span id='dollar-sign' {...dollarSignProps}>$</span>
            <span id='dollars' {...dollarProps}>{this.getValue().dollars}</span>
            <span id='cents' {...centProps}>.{this.getValue().cents}</span>
          </FlexContainer>
          {this.props.label !== '' &&
          <FlexContainer margin='-10px 0 0 0'>
            <Text id='label' fontSize='8pt' light>{this.props.label}</Text>
          </FlexContainer>
            }
        </FlexContainer>
      </FlexContainer>
    )
  }
}

Price.propTypes = {
  value: PropTypes.number.isRequired,
  label: PropTypes.string,
}

export default Price
