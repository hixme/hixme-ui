import React, { Component } from 'react'
import PropTypes from 'prop-types'

import StyledCheckbox from './StyledCheckbox'
import StyledFakeCheckbox from './StyledFakeCheckbox'
import StyledLabel from './StyledLabel'

export default class Checkbox extends Component {
  static displayName = 'hui:Checkbox'
  static huiName = 'Checkbox'

  static propTypes = {
    className: PropTypes.string,
    name: PropTypes.string,
    text: PropTypes.string,
    small: PropTypes.bool,
    jumbo: PropTypes.bool,
    defaultChecked: PropTypes.bool,
    checked: PropTypes.bool,
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
  }

  static defaultProps = {
    className: null,
    name: '',
    text: '',
    small: false,
    jumbo: false,
    defaultChecked: null,
    onChange: null,
    checked: null,
    disabled: false,
  }

  getProps() {
    const { ...props } = this.props

    // sanitze props for react props
    const keys = [
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

    const inputProps = Object.keys(props).reduce((prev, current) => {
      const newPrev = { ...prev }
      if (keys.indexOf(current) !== -1) {
        newPrev[current] = props[current]
      }
      return newPrev
    }, {})

    const checkChecked =
      props.defaultChecked === null ? { checked: props.checked } : { defaultChecked: props.defaultChecked }

    return {
      onChange: this.onChange,
      ...inputProps,
      ...checkChecked,
    }
  }

  /* eslint-disable jsx-a11y/label-has-for */
  render() {
    return (
      <label>
        <StyledCheckbox type='checkbox' {...this.getProps()} />
        <StyledFakeCheckbox jumbo={this.props.jumbo} small={this.props.small} disabled={this.props.disabled} />
        <StyledLabel disabled={this.props.disabled}>{this.props.text}</StyledLabel>
      </label>
    )
  }
}
