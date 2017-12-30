import styled from 'styled-components'
import theme from '@hixme-ui/theme'
import { getTextColor } from '@hixme-ui/theme-props'

const StyledDollars = styled.span`
  font-size: 13pt;
  font-family: ${theme.fontFamily.bolder};
  color: ${props => getTextColor(props)};
`

export default StyledDollars

