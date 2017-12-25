import styled from 'styled-components'
import theme from '@hixme-ui/theme'

const StyledFakeCheckbox = styled.span`
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  border-radius: 3px;
  border: 1px solid #b9c5cd;
  width: ${props => (props.small ? '15px' : '18px')};
  height: ${props => (props.small ? '15px' : '18px')};
  display: inline-block;
  vertical-align: top;
  position: relative;
  background: ${props => (props.disabled ? theme.colors.lightest : 'white')};
  font-size: 0;
  line-height: 0;
  &:after {
    position: absolute;
    left: ${props => (props.small ? '3px' : '4px')};
    top: 4px;
    content: '';
    border: ${props => (props.disabled ? '2px solid #B9C5CD' : '2px solid #2eae8f')};
    border-top: none;
    border-right: none;
    width: ${props => (props.small ? '8px' : '9px')};
    height: ${props => (props.small ? '4px' : '5px')};
    opacity: 0;
    transform: rotate(-45deg);
    transition: all .2s ease-in-out;
  }
`

export default StyledFakeCheckbox
