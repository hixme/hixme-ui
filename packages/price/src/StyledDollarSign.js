import styled from 'styled-components'
import theme from '@hixme-ui/theme'
import { getTextColor } from '@hixme-ui/theme-props'

const StyledDollarSign = styled.span`
  font-size: 15pt;
  padding: 0 5px 0 0;
  font-weight: ${theme.fontWeights.thin};
  color: ${props => getTextColor(props)};
`

export default StyledDollarSign
