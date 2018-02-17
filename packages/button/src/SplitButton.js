import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Icon from '@hixme-ui/icon'
import Button from './Button'

const mainButtonStyles = {
  borderTopRightRadius: '0',
  borderBottomRightRadius: '0',
}

const toggleButtonStyles = {
  borderTopLeftRadius: '0',
  borderBottomLeftRadius: '0',
  marginLeft: '-1px',
  minWidth: 'auto',
  padding: '5px',
}

const SplitButtonContainer = styled.div`
 display: inline-flex;
 justify-content: center;
 position: relative;
 white-space: nowrap;
`

class SplitButton extends Component {
  static displayName = 'SplitButton'

  static propTypes = {
    onClick: PropTypes.func,
    onSelect: PropTypes.func,
    children: PropTypes.string,
    splitContent: PropTypes.node,
  }

  static defaultProps = {
    onClick: null,
    onSelect: null,
    children: '',
    splitContent: null,
  }

  constructor(props) {
    super(props)
    this.state = {
      active: false,
    }
  }

  componentWillUnmount() {
    // removes the document event listener when navigating away from route
    this.closeMenu()
  }

  handleTrigger = () => {
    if (this.state.active) {
      document.removeEventListener('click', this.closeMenuOnOutsideClick)
    } else {
      document.addEventListener('click', this.closeMenuOnOutsideClick)
    }
    this.setState({
      active: !this.state.active,
    })
  }

  closeMenu = () => {
    this.setState({
      active: false,
    })
    document.removeEventListener('click', this.closeMenuOnOutsideClick)
  }

  closeMenuOnOutsideClick = () => {
    this.closeMenu()
  }

  render() {
    const { onClick, onSelect, children, splitContent, ...rest } = this.props
    return (
      <SplitButtonContainer>
        <Button outline style={mainButtonStyles} onClick={onClick || onSelect} {...rest}>{children}</Button>
        <Button outline style={toggleButtonStyles} onClick={this.handleTrigger} {...rest}>
          <Icon arrowDown light size={0.8} />
        </Button>
        {this.state.active && splitContent}
      </SplitButtonContainer>
    )
  }
}

export default SplitButton

