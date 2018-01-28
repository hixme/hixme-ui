import React from 'react'
import PropTypes from 'prop-types'
import Icon from '@hixme-ui/icon'
import Text from '@hixme-ui/text'

const handleClick = (e) => {
  e.preventDefault()
  window.print()
}

const Print = ({
  showIcon,
  showLabel,
  label,
}) => (
  <a href='javascript:void(0)' style={{ display: 'inline-block' }} onClick={handleClick}>
    {showLabel &&
      <Text muted style={{ margin: '0 0.5em 0 0', verticalAlign: 'bottom' }}>{label}</Text>}
    {showIcon &&
      <Icon printer fontSize={22} muted style={{ verticalAlign: 'middle' }} />}
  </a>
)

Print.propTypes = {
  label: PropTypes.string,
  showIcon: PropTypes.bool,
  showLabel: PropTypes.bool,
}

Print.defaultProps = {
  label: 'Print',
  showIcon: true,
  showLabel: true,
}

Print.displayName = 'hui:Print'
Print.huiName = 'Print'

export default Print

