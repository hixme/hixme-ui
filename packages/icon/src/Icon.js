import React from 'react'
import PropTypes from 'prop-types'

import getTextColor from '@hixme-ui/theme-props'

// project
import iconList from './list'
import StyledIconContainer from './StyledIconContainer'

const icons = Object.keys(iconList)

const getIcon = (props) => {
  const iconName = icons.find(name => props[name])

  if (!iconName) {
    console.warn('hixme-ui:Icon - icon not provided or not found`') // eslint-disable-line no-console
  } else {
    return iconList[iconName]
  }
  return null
}

const getFontSize = ({ fontSize, size }) => `${fontSize * size}px`

const Icon = (props) => {
  const { color } = props
  const UseIcon = getIcon(props)
  return (
    <StyledIconContainer size={getFontSize(props)}>
      <UseIcon
        color={color || getTextColor(props, 'black')}
        fill={color || getTextColor(props, 'black')}
        style={{ maxHeight: getFontSize(props) }}
      />
    </StyledIconContainer>
  )
}

Icon.displayName = 'hui:Icon'
Icon.huiName = 'Icon'

/* eslint-disable react/no-unused-prop-types */
Icon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
  fontSize: PropTypes.number,
}

Icon.defaultProps = {
  color: '',
  size: 1,
  fontSize: 14,
}

export default Icon
