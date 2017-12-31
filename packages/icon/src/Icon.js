import React from 'react'
import PropTypes from 'prop-types'

import getTextColor from '@hixme-ui/theme-props'

// project
import iconList from './list'
import StyledIconContainer from './StyledIconContainer'

const icons = Object.keys(iconList)

const Icon = ({
  color,
  size,
  fontSize,
  ...restProps
}) => {
  const getIcon = () => {
    const iconName = icons.find(name => restProps[name])

    if (!iconName) {
      console.warn('hixme-ui:Icon - icon not provided or not found`') // eslint-disable-line no-console
    } else {
      return iconList[iconName]
    }
    return null
  }

  const UseIcon = getIcon()
  const getFontSize = () => `${fontSize * size}px`

  return (
    <StyledIconContainer size={getFontSize()}>
      <UseIcon
        color={color || getTextColor(restProps)}
        fill={color || getTextColor(restProps)}
        style={{ maxHeight: getFontSize() }}
      />
    </StyledIconContainer>
  )
}

Icon.huiName = 'Icon'
Icon.displayName = 'hui:Icon'

Icon.propTypes = {
  /**
   * options
   */
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
