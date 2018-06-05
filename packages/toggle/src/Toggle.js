import React from 'react'
import PropTypes from 'prop-types'

import Text from '@hixme-ui/text'

import StyledToggle from './StyledToggle'
import Slider from './Slider'

const ToggleButton = ({
  truthyText,
  falsyText,
  noLabels,
  withIcons,
  ...rest
}) => {
  // restrict redux form props
  const getProps = () => {
    const allowedKeys = [
      'checked',
      'disabled',
      'name',
      'onKeyUp',
      'onKeyDown',
      'onKeyPress',
      'onChange',
      'onDragStart',
      'onDrop',
      'placeholder',
      'tabIndex',
      'type',
      'value',
    ]

    /* eslint-disable no-param-reassign */
    return Object.keys(rest).reduce((prev, current) => {
      if (allowedKeys.indexOf(current) !== -1) {
        prev[current] = rest[current]
      }
      return prev
    }, {})
  }

  const withLabels = !noLabels
  const ToggleLabel = () => {
    if (withLabels) {
      return rest.checked ? (
        <Text large style={{ margin: '0 0 0 14px' }}>
          {truthyText}
        </Text>
      ) : (
        <Text large style={{ margin: '0 0 0 14px' }}>
          {falsyText}
        </Text>
      )
    }
    return <span />
  }

  return (
    <StyledToggle>
      <div>
        <input type='checkbox' {...getProps()} />
        <Slider id='slider' {...getProps()} />
        <ToggleLabel />
      </div>
    </StyledToggle>
  )
}

ToggleButton.displayName = 'hui:ToggleButton'
ToggleButton.huiName = 'ToggleButton'

ToggleButton.propTypes = {
  truthyText: PropTypes.string,
  falsyText: PropTypes.string,
  noLabels: PropTypes.bool,
  withIcons: PropTypes.bool,
}

ToggleButton.defaultProps = {
  truthyText: 'Yes',
  falsyText: 'No',
  noLabels: false,
  withIcons: false,
}

export default ToggleButton
