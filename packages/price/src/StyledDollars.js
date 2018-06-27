import styled from 'styled-components'
import { getTextColor } from '@hixme-ui/theme-props'

const StyledDollars = styled.span`
  font-size: 32pt;
  margin-top: -10px;
  color: ${props => getTextColor(props)};
`

export default StyledDollars
