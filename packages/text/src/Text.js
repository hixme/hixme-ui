import React from 'react'
import PropTypes from 'prop-types'
import theme from '@hixme-ui/theme'
import { getTextColor } from '@hixme-ui/theme-props'

import TextBase from './TextBase'

export const Paragraph = TextBase.withComponent('p')
export const TextDiv = TextBase.withComponent('div')

export const TextLink = TextBase.withComponent('a')
export const HyperLink = TextLink.extend`
  color: ${props => props.color || getTextColor(props, theme.textColors.darkBlue)};
  cursor: pointer;
`

export const LabelBase = TextBase.withComponent('label')
export const Label = LabelBase.extend`
  color: ${props => props.color || getTextColor(props, '#394651')};
  line-height: ${props => props.lineHeight || '19px'};
  user-select: none;
`

const Text = ({
  a,
  div,
  label,
  p,
  ...props
}) => {
  let Tag = TextBase

  if (a || props.href) {
    Tag = HyperLink
  } else if (p) {
    Tag = Paragraph
  } else if (div) {
    Tag = TextDiv
  } else if (label) {
    Tag = Label
  }

  return <Tag {...props} />
}

Text.displayName = 'hui:Text'
Text.huiName = 'Text'

Text.propTypes = {
  a: PropTypes.bool,
  div: PropTypes.bool,
  href: PropTypes.string,
  label: PropTypes.bool,
  p: PropTypes.bool,
}
Text.defaultProps = {
  a: false,
  div: false,
  href: null,
  label: false,
  p: false,
}

export default Text

