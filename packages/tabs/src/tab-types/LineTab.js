import styled from 'styled-components'
import { getTextColor } from '@hixme-ui/theme-props'

const LineTab = styled.div`
  width: ${props => props.width || 'auto'};
  text-align: left;
  transition: all 0.2s ease;
  cursor: pointer;
  margin-bottom: ${props => props.marginBottom || '4px'};
  border-bottom: ${(props) => {
    if (props.active) return `4px solid ${getTextColor(props)}`
    return '4px solid rgba(0, 0, 0, 0)'
  }};
  border-bottom-width: 4px;
`

export default LineTab
