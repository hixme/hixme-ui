import React, { Component } from 'react'
import PropTypes from 'prop-types'

// hixme-ui
import Container from '@hixme-ui/container'
import Icon from '@hixme-ui/icon'
import Text from '@hixme-ui/text'

class CloseButton extends Component {
  static displayName = 'hui:CloseButton'
  static huiName = 'CloseButton'
  static propTypes = {
    iconSize: PropTypes.number,
    onClick: PropTypes.func,
    label: PropTypes.string,
    noLabel: PropTypes.bool,
  }
  static defaultProps = {
    iconSize: 1.8,
    onClick: () => null,
    label: 'CLOSE',
    noLabel: false,
  }


  render() {
    const {
      onClick,
      label,
      noLabel,
      iconSize,
    } = this.props

    return (
      <Container flexColumn alignCenter onClick={onClick} padding='0'>
        <Text cursor='pointer'><Icon xCircle size={iconSize} light /></Text>
        {noLabel ? null : <Text light cursor='pointer'>{label}</Text>}
      </Container>
    )
  }
}

export default CloseButton

