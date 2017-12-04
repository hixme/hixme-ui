import React from 'react'
import PropTypes from 'prop-types'
import { TextBase } from '@hixme-ui/text'

export const TitleBase = TextBase.withComponent('h1').extend`
  margin: ${props => props.margin || '0px'};
  padding: ${props => props.padding || '0px'};
`

export const TitleDefault = TitleBase.extend`
  font-size: ${props => props.fontSize || '34px'};
`

export const TitleJumbo = TitleBase.extend`
  font-size: ${props => props.fontSize || '38px'};
`

export const TitleSmall = TitleBase.withComponent('h2').extend`
  font-size: ${props => props.fontSize || '28px'};
`

export const TitleSmaller = TitleBase.withComponent('h3').extend`
  font-size: ${props => props.fontSize || '20px'};
`
export const TitleSmallest = TitleBase.withComponent('h4').extend`
  font-size: ${props => props.fontSize || '18px'};
`

const Title = ({
  jumbo,
  small,
  smaller,
  smallest,

  children,
  ...props
}) => {
  let Tag = TitleDefault
  if (jumbo) {
    Tag = TitleJumbo
  } else if (small) {
    Tag = TitleSmall
  } else if (smaller) {
    Tag = TitleSmaller
  } else if (smallest) {
    Tag = TitleSmallest
  }

  return <Tag {...props}>{children}</Tag>
}

Title.displayName = 'hui:Title'
Title.huiName = 'Title'

Title.propTypes = {
  jumbo: PropTypes.bool,
  small: PropTypes.bool,
  smaller: PropTypes.bool,
  smallest: PropTypes.bool,
  children: PropTypes.any,
}
Title.defaultProps = {
  jumbo: false,
  small: false,
  smaller: false,
  smallest: false,
  children: null,
}

export default Title
