import styled from 'styled-components'

const StyledMain = styled.div`
  ${props => props.contentBackgroundColor && `background-color: ${props.contentBackgroundColor};`}
  margin-left: ${props => (props.open ? props.sidebarWidth : '0')};
  min-height: 100%;
  position: relative;
  transition: margin-left 0.5s;
`

StyledMain.displayName = 'StyledMain'

export default StyledMain
