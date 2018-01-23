import styled from 'styled-components'

const StyledSidebar = styled.div`
  height: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  top: 0;
  width: $sidebarWidth;
  @media print {
    display: none;
  }
`

StyledSidebar.displayName = 'StyledSidebar'

export default StyledSidebar
