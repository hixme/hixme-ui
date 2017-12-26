import styled from 'styled-components'
import theme from '@hixme-ui/theme'

const StyledLabel = styled.span`
  cursor: ${props => (props.disabled ? 'default' : 'pointer')};
  display: inline-block;
  color: ${props => (props.disabled ? theme.colors.lighter : theme.colors.default)};
  margin: 0 0 0 16px;
  vertical-align: top;
`

export default StyledLabel
