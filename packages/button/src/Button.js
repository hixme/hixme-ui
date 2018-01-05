import React from 'react'
import PropTypes from 'prop-types'
import OutlineButton from './OutlineButton'
import GradientButton from './GradientButton'

const Button = ({
  outline,
  ...props
}) => {
  if (outline) {
    return (<OutlineButton {...props} />)
  }

  return (<GradientButton {...props} />)
}

Button.displayName = 'hui:Button'
Button.huiName = 'Button'

Button.propTypes = {
  outline: PropTypes.bool,
}
Button.defaultProps = {
  outline: false,
}

export default Button
