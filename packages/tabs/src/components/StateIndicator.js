import styled from 'styled-components'
import { colorTheme } from '@hixme-ui/theme'

const StateIndicator = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  cursor: pointer;
  ${(props) => {
    if (props.state) {
      return props.state === 'WARN'
      ? `background: ${colorTheme.warning}`
      : `background: ${colorTheme.danger}`
    }
    return null
  }}
`

export default StateIndicator
