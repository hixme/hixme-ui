import styled from 'styled-components'
import { getTextColor } from '@hixme-ui/theme-props'

const StyledDollars = styled.span`
  font-size: 13pt;
  font-weight: bold;
  color: ${props => getTextColor(props)};
`

export default StyledDollars
