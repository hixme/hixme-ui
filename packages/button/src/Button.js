import React from 'react'
import PropTypes from 'prop-types'

import OutlineButton from './OutlineButton'
import GradientButton from './GradientButton'

const Button = ({
  children,
  disabled,
  outline,
  submitting,
  submittingText,
  ...props
}) => {
  if (outline) {
    return (
      <OutlineButton
        {...props}
        disabled={submitting || disabled}
      >
        {submitting ? submittingText : children}
      </OutlineButton>
    )
  }

  return (
    <GradientButton
      {...props}
      disabled={submitting || disabled}
    >
      {submitting ? submittingText : children}
    </GradientButton>
  )
}

Button.displayName = 'hui:Button'
Button.huiName = 'Button'

Button.propTypes = {
  disabled: PropTypes.bool,
  children: PropTypes.node,
  outline: PropTypes.bool,
  submitting: PropTypes.bool,
  submittingText: PropTypes.string,
}

Button.defaultProps = {
  disabled: false,
  children: null,
  outline: false,
  submitting: false,
  submittingText: 'Submitting...',
}

export default Button
