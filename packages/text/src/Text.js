import React from 'react'
import PropTypes from 'prop-types'
import TextBase from './TextBase'

const Anchor = TextBase.withComponent('a')
const Paragraph = TextBase.withComponent('p')
const Label = TextBase.withComponent('label')

const Text = ({
  a,
  p,
  label,
  ...props
}) => {
  let Tag = TextBase

  if (a) {
    Tag = Anchor
  } else if (p) {
    Tag = Paragraph
  } else if (label) {
    Tag = Label
  }

  return <Tag {...props} />
}

Text.displayName = 'hui:Text'
Text.huiName = 'Text'

Text.propTypes = {
  a: PropTypes.bool,
  p: PropTypes.bool,
  label: PropTypes.bool,
}
Text.defaultProps = {
  a: false,
  p: false,
  label: false,
}

export default Text

