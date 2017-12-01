import React from 'react'
import PropTypes from 'prop-types'
import TextBase from './TextBase'

export const TextLink = TextBase.withComponent('a')
export const Paragraph = TextBase.withComponent('p')

export const LabelBase = TextBase.withComponent('label')
export const Label = LabelBase.extend`
  color: #394651;
  line-height: 19px;
  user-select: none;
`
const Text = ({
  a,
  p,
  label,
  ...props
}) => {
  let Tag = TextBase

  if (a || props.href) {
    Tag = TextLink
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
  href: PropTypes.string,
}
Text.defaultProps = {
  a: false,
  p: false,
  label: false,
  href: null,
}

export default Text

