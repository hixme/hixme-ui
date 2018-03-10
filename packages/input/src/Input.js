import React from 'react'
import PropTypes from 'prop-types'
import MaskedInput from 'react-maskedinput'

import Animate from '@hixme-ui/animate'
import Icon from '@hixme-ui/icon'

import InputBase from './InputBase'

// Remove all styled specific props as to not
// pass them onto the Masked component.
// This is to prevent React errors in the console
const Masked = InputBase.withComponent(({
  date,
  error,
  large,
  phone,
  search,
  ssn,
  ...props
}) => <MaskedInput {...props} />)

const InputTextarea = InputBase.withComponent('textarea')

const Input = ({
  date,
  mask,
  phone,
  ssn,
  textarea,
  submitting,
  ...props
}) => {
  if (phone || ssn || date || mask) {
    let masked = mask || ''
    if (phone) masked = '(111) 111 - 1111'
    if (ssn) masked = '111 - 11 - 1111'
    if (date) masked = '11/11/1111'
    return (
      <Masked mask={masked} {...props} />
    )
  }

  if (textarea) {
    return <InputTextarea {...props} />
  }

  if (submitting) {
    return (
      <div style={{ position: 'relative' }}>
        <InputBase disabled {...props} />
        <span style={{ position: 'absolute', top: '10px', right: '15px' }}>
          <Animate rotateIn count='infinite' trigger fillMode='both'>
            <Icon cog light size={1.2} />
          </Animate>
        </span>
      </div>
    )
  }

  return (
    <InputBase {...props} />
  )
}

Input.displayName = 'hui:Input'
Input.huiName = 'Input'

Input.propTypes = {
  phone: PropTypes.bool,
  ssn: PropTypes.bool,
  date: PropTypes.bool,
  textarea: PropTypes.bool,
  submitting: PropTypes.bool,
  mask: PropTypes.string,
}
Input.defaultProps = {
  phone: false,
  ssn: false,
  date: false,
  textarea: false,
  submitting: false,
  mask: null,
}

export default Input
