import React from 'react'
import PropTypes from 'prop-types'
import MaskedInput from 'react-maskedinput'
import InputBase from './InputBase'

const Masked = InputBase.withComponent(MaskedInput)
const InputTextarea = InputBase.withComponent('textarea')

const Input = ({
  phone,
  ssn,
  date,
  mask,
  textarea,
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
  mask: PropTypes.string,
}
Input.defaultProps = {
  phone: false,
  ssn: false,
  date: false,
  textarea: false,
  mask: null,
}

export default Input