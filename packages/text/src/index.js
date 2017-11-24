import styled from 'styled-components'
import themeProps, { getTextColor, getFontSize } from '@hixme-ui/theme-props'

const Text = styled.span`
  color: ${props => getTextColor(props)};
  font-size: ${props => props.fontSize || getFontSize(props)};
  text-align: ${props => {
    if (props.left) return 'left'
    if (props.center) return 'center'
    if (props.right) return 'right'

    return 'inherit'
  }};
`

Text.displayName = 'hui:Text'
Text.huiName = 'Text'

export default Text
