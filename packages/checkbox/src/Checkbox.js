import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export default class Checkbox extends Component {
  static displayName = 'hui:Checkbox'
  static huiName = 'Checkbox'

  static propTypes = {
    className: PropTypes.string,
    name: PropTypes.string,
    text: PropTypes.string,
    small: PropTypes.bool,
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
    const StyledCheckbox = styled.input`
      position: fixed;
      left: -9999px;
      top: -9999px;
      &:checked ~ {
        &:after {
          opacity: 1 !important;
        }
      }
      &:focus ~ {
        outline: none;
        border-color: #2fb699;
        box-shadow: 0 0 10px #2fb699;
      }
    `

    const StyledFakeCheckbox = styled.span`
      cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
      border-radius: 3px;
      border: 1px solid #b9c5cd;
      width: ${props => (props.small ? '15px' : '18px')};
      height: ${props => (props.small ? '15px' : '18px')};
      display: inline-block;
      vertical-align: top;
      position: relative;
      background: white;
      font-size: 0;
      line-height: 0;
      &:after {
        position: absolute;
        left: ${props => (props.small ? '3px' : '4px')};
        top: 4px;
        content: '';
        border: ${props => (props.disabled ? '2px solid #B9C5CD' : '2px solid #2eae8f')};
        border-top: none;
        border-right: none;
        width: ${props => (props.small ? '8px' : '9px')};
        height: ${props => (props.small ? '4px' : '5px')};
        opacity: 0;
        transform: rotate(-45deg);
        transition: all .2s ease-in-out;
      }
    `

    const StyledLabel = styled.span`
      cursor: pointer;
      display: inline-block;
      color: #4a5b64;
      margin: 0 0 0 16px;
      vertical-align: top;
    `

    return (
      <label>
        <StyledCheckbox type='checkbox' {...this.getProps()} />
        <StyledFakeCheckbox small={this.props.small} disabled={this.props.disabled} />
        <StyledLabel>{this.props.text}</StyledLabel>
      </label>
    )
  }
}
