import React from 'react'
import PropTypes from 'prop-types'

import MenuButton from './MenuButton'
import OutlineButton from './OutlineButton'
import GradientButton from './GradientButton'

const Button = ({
  children,
  disabled,
  menu,
  outline,
  split,
  loading,
  loadingText,
  submitting,
  submittingText,
  ...props
}) => {
  if (outline) {
    return (
      <OutlineButton {...props} disabled={loading || submitting || disabled}>
        {loading || submitting ? loadingText || submittingText : children}
      </OutlineButton>
    )
  }

  if (split || menu) {
    return (
      <MenuButton
        split={split}
        {...props}
        disabled={loading || submitting || disabled}
      >
        {loading || submitting ? loadingText || submittingText : children}
      </MenuButton>
    )
  }

  return (
    <GradientButton {...props} disabled={loading || submitting || disabled}>
      {loading || submitting ? loadingText || submittingText : children}
    </GradientButton>
  )
}

Button.displayName = 'hui:Button'
Button.huiName = 'Button'

Button.propTypes = {
  disabled: PropTypes.bool,
  children: PropTypes.node,
  outline: PropTypes.bool,
  menu: PropTypes.bool,
  split: PropTypes.bool,
  submitting: PropTypes.bool,
  submittingText: PropTypes.string,
  loading: PropTypes.bool,
  loadingText: PropTypes.string,
}

Button.defaultProps = {
  disabled: false,
  children: null,
  outline: false,
  menu: false,
  split: false,
  submitting: false,
  submittingText: 'Submitting...',
  loading: false,
  loadingText: null,
}

export default Button
