import styled from 'styled-components'
import theme from '@hixme-ui/theme'

const StyledFakeCheckbox = styled.span`
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  border-radius: 3px;
  border: 1px solid #b9c5cd;
  width: ${({ small, jumbo }) => {
    if (small) { return '15px' }
    if (jumbo) { return '22px' }
    return '18px'
  }};
  height: ${({ small, jumbo }) => {
    if (small) { return '15px' }
    if (jumbo) { return '22px' }
    return '18px'
  }};
  display: inline-block;
  vertical-align: top;
  position: relative;
  background: ${props => (props.disabled ? '#f9fafb' : 'white')};
  font-size: 0;
  line-height: 0;
  &:after {
    position: absolute;
    left: ${({ small, jumbo }) => {
      if (small) { return '3px' }
      if (jumbo) { return '5px' }
      return '4px'
    }};
    top: 4px;
    content: '';
    border: ${props => (props.disabled ? '2px solid #B9C5CD' : `2px solid ${theme.colors.primary}`)};
    border-top: none;
    border-right: none;
    width: ${({ small, jumbo }) => {
      if (small) { return '8px' }
      if (jumbo) { return '12px' }
      return '9px'
    }};
    height: ${({ small, jumbo }) => {
      if (small) { return '4px' }
      if (jumbo) { return '7px' }
      return '5px'
    }};
    opacity: 0;
    transform: rotate(-45deg);
    transition: all .2s ease-in-out;
  }
`

export default StyledFakeCheckbox
