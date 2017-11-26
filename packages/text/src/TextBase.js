import styled from 'styled-components'
import {
  getTextColor,
  getFontSize,
  getFontWeight,
} from '@hixme-ui/theme-props'

const TextBase = styled.span`
  color: ${props => props.color || getTextColor(props)};
  font-size: ${props => props.fontSize || getFontSize(props)};
  font-weight: ${props => props.fontWeight || getFontWeight(props)}
  border-bottom: ${(props) => {
    if (props.dashed) return '1px dashed'
    return 'none'
  }};
  cursor: ${(props) => {
    if (props.cursor) return props.cursor
    if (props.a) return 'pointer'
    return 'auto'
  }};
  display: ${props => props.display || 'inline-flex'};
  justify-content: ${(props) => {
    if (props.right) return 'flex-end'
    if (props.left) return 'flex-start'
    if (props.center) return 'center'
    return 'flex-start'
  }};
  line-height: ${(props) => {
    if (props.lineHeight) return props.lineHeight
    if (props.label) return '19px'
    return 'inherit'
  }};
  text-align: ${(props) => {
    if (props.left) return 'left'
    if (props.center) return 'center'
    if (props.right) return 'right'

    return 'inherit'
  }};
  text-indent: ${props => props.textIndent || 'inherit'};
  text-transform: ${(props) => {
    if (props.uppercase) return 'uppercase'
    if (props.lowercase) return 'lowercase'
    if (props.capitalize) return 'capitalize'
    return 'none'
  }};
  text-overflow: ${props => props.textOverflow || 'inherit'};
  user-select: ${(props) => {
    if (props.userSelect) return props.userSelect
    if (props.label) return 'none'
    return 'inherit'
  }};
  white-space: ${props => props.whiteSpace || 'inherit'};
  width: ${(props) => {
    if (props.right || props.left || props.center) return '100%'
    return 'auto'
  }};
  word-break: ${(props) => {
    if (props.wordBreak) return props.wordBreak
    return 'inherit'
  }};
`

TextBase.displayName = 'hui:TextBase'
TextBase.huiName = 'TextBase'

export default TextBase
