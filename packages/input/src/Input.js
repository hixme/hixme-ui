import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import MaskedInput from 'react-maskedinput'

import Spinner from '@hixme-ui/spinner'
import Icon from '@hixme-ui/icon'
import Text from '@hixme-ui/text'

import InputBase from './InputBase'

export const SpinnerContainer = styled.span`
  position: absolute;
  top: 12px;
  right: 12px;
  cursor: not-allowed;
`

export const PrefixContainer = styled.span`
  position: absolute;
  top: 9px;
  left: 12px;
`

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
  currency,
  date,
  mask,
  phone,
  ssn,
  submitting,
  textarea,
  ...props
}) => {
  if (currency) {
    return (
      <div style={{ position: 'relative' }}>
        <InputBase currency={currency} {...props} />
        <PrefixContainer>
          <Text light large>$</Text>
        </PrefixContainer>
      </div>
    )
  }

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
        <SpinnerContainer>
          <Spinner animate duration='2s'>
            <Icon cog lighter size={1.2} />
          </Spinner>
        </SpinnerContainer>
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
  currency: PropTypes.bool,
  date: PropTypes.bool,
  mask: PropTypes.string,
  phone: PropTypes.bool,
  ssn: PropTypes.bool,
  submitting: PropTypes.bool,
  textarea: PropTypes.bool,
}

Input.defaultProps = {
  currency: false,
  date: false,
  mask: null,
  phone: false,
  ssn: false,
  submitting: false,
  textarea: false,
}

export default Input
