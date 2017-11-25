import styled from 'styled-components'
import { getTextColor, getFontSize, getFontWeight } from '@hixme-ui/theme-props'

const Text = styled.span`
  color: ${props => props.color || getTextColor(props)};
  font-size: ${props => props.fontSize || getFontSize(props)};
  font-weight: ${props => props.fontWeight || getFontWeight(props)}
  border-bottom: ${(props) => {
    if (props.dashed) return '1px dashed'
    return 'none'
  }};
  cursor: ${props => props.cursor || 'auto'};
  display: ${props => props.display || 'inline-flex'};
  justify-content: ${(props) => {
    if (props.right) return 'flex-end'
    if (props.left) return 'flex-start'
    if (props.center) return 'center'
    return 'flex-start'
  }};
  text-align: ${(props) => {
    if (props.left) return 'left'
    if (props.center) return 'center'
    if (props.right) return 'right'

    return 'inherit'
  }};
  text-transform: ${(props) => {
    if (props.uppercase) return 'uppercase'
    if (props.lowercase) return 'lowercase'
    if (props.capitalize) return 'capitalize'
    return 'none'
  }};
  width: ${(props) => {
    if (props.right || props.left || props.center) return '100%'
    return 'auto'
  }};
`

Text.displayName = 'hui:Text'
Text.huiName = 'Text'

export default Text
