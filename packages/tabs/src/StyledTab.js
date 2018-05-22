import styled from 'styled-components'
import theme from '@hixme-ui/theme'
import { getTextColor } from '@hixme-ui/theme-props'

const StyledTab = styled.div`
  transition: all 0.2s ease;
  margin-bottom: 4px;
  border-bottom: ${(props) => {
    if (props.active) return `4px solid ${getTextColor(props)}`
    return '4px solid rgba(0, 0, 0, 0)'
  }};
  border-bottom-width: 4px;
`

export default StyledTab
