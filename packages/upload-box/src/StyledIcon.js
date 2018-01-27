import styled from 'styled-components'

const StyledIcon = styled.div`
  margin: ${props => (props.compact ? '0 18px' : '0')};
  position: relative; 
  top: ${props => (props.compact ? '6px' : '0')}; 
`

export default StyledIcon
