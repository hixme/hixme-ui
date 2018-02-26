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

const MenuButtonContainer = styled.div`
 justify-content: center;
 position: relative;
 white-space: nowrap;
`

class MenuButton extends Component {
  static displayName = 'MenuButton'

  static propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.string,
    contentComponent: PropTypes.func,
    split: PropTypes.bool,
  }

  static defaultProps = {
    onClick: null,
    children: '',
    contentComponent: () => null,
    split: false,
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
    const { split, onClick, children, contentComponent, ...rest } = this.props
    const hasMini = Object.keys(this.props).includes('mini')
    const ContentComponent = contentComponent

    return (
      <MenuButtonContainer>
        <Button
          outline
          style={split ? mainButtonStyles : null}
          onClick={split ? onClick : this.handleTrigger}
          {...rest}
        >
          {children}
          {!split && <div style={{ marginLeft: '10px' }}><Icon arrowDown light size={hasMini ? 0.8 : 1} /></div>}
        </Button>
        {split &&
          <Button outline style={toggleButtonStyles} onClick={this.handleTrigger} {...rest}>
            <Icon arrowDown light size={hasMini ? 0.8 : 1} />
          </Button>
        }
        {this.state.active && <ContentComponent />}
      </MenuButtonContainer>
    )
  }
}

export default MenuButton

