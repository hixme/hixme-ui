import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { TextBase } from '@hixme-ui/text'

export const TitleBase = styled(TextBase.withComponent('h1'))`
  margin: ${props => props.margin || '0px'};
  padding: ${props => props.padding || '0px'};
`

export const TitleDefault = styled(TitleBase)`
  font-size: ${props => props.fontSize || '34px'};
`

export const TitleJumbo = styled(TitleBase)`
  font-size: ${props => props.fontSize || '38px'};
`

export const TitleSmall = styled(TitleBase.withComponent('h2'))`
  font-size: ${props => props.fontSize || '28px'};
`

export const TitleSmaller = styled(TitleBase.withComponent('h3'))`
  font-size: ${props => props.fontSize || '20px'};
`
export const TitleSmallest = styled(TitleBase.withComponent('h4'))`
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
