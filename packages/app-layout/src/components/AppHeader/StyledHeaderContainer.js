import styled from 'styled-components'

const StyledHeaderContainer = styled.div`
  position: ${props => (props.fixed ? 'fixed' : 'static')};
  z-index: 1000;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  height: 56px;
  right: 0px;
  left: ${props => (props.open ? props.sidebarWidth : '0px')};
  transition: left 0.5s;
  display: flex;
  align-items: center;
  padding: 0 20px 0 20px;
  @media print {
    display: none;
  }
`

StyledHeaderContainer.displayName = 'StyledHeaderContainer'

export default StyledHeaderContainer
