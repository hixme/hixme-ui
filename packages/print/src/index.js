import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Icon from '@hixme-ui/icon'
import Text from '@hixme-ui/text'

const PrintLabel = styled.span`
  margin-right: 6px;
  margin-top: 3px;
  display: inline-block;
  vertical-align: top;
`

const handleClick = (e) => {
  e.preventDefault()
  window.print()
}

const Print = ({
  showIcon,
  showLabel,
  label,
}) => (
  <Text
    cursor='pointer'
    light
    onClick={handleClick}
  >
    {showLabel && <PrintLabel>{label}</PrintLabel>}
    {showIcon &&
      <Icon printer fontSize={22} light style={{ verticalAlign: 'middle' }} />}
  </Text>
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

