import React, { Component } from 'react'
import Switch from './Switch'

export default class Toggle extends Component {
  state = { active: false }

  handleToggle = () => {
    this.setState(
      ({ active }) => ({ active: !active }),
    )
  }

  render() {
    return <Switch on={this.state.active} onClick={this.handleToggle} />
  }
}

Toggle.displayName = 'Toggle'
