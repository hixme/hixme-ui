import styled from 'styled-components'
import theme from '@hixme-ui/theme'
import { getTextColor } from '@hixme-ui/theme-props'

const StyledDollars = styled.span`
  font-size: 32pt;
  margin-top: -10px;
  font-weight: ${theme.fontWeights.bold};
  color: ${props => getTextColor(props)};
`

export default StyledDollars
