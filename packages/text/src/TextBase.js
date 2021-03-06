import styled from 'styled-components'
import {
  getFontFamily,
  getFontSize,
  getFontWeight,
  getTextColor,
} from '@hixme-ui/theme-props'

const TextBase = styled.span`
  color: ${props => props.color || getTextColor(props, 'inherit')};
  font-family: ${props => props.fontFamily || getFontFamily(props)};
  font-size: ${props => props.fontSize || getFontSize(props, 'inherit')};
  font-weight: ${props => props.fontWeight || getFontWeight(props)};
  border-bottom: ${(props) => {
    if (props.dashed) return '1px dashed'
    return 'none'
  }};
  ${({ a, cursor }) => (a || cursor) && `cursor: ${(cursor || 'pointer')};`}
  ${props => props.display && `display: ${props.display}`};
  justify-content: ${(props) => {
    if (props.right) return 'flex-end'
    if (props.left) return 'flex-start'
    if (props.center) return 'center'
    return 'flex-start'
  }};
  line-height: ${props => props.lineHeight || 'inherit'};
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
  user-select: ${props => props.userSelect || 'inherit'};
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
