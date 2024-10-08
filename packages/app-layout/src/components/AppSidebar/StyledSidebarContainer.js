import styled from 'styled-components'

const StyledSidebarContainer = styled.div`
  background-color: ${(props) => {
    if (props.theme && props.theme.colors && props.theme.colors.primary) {
      return props.theme.colors.primary
    }
    return '#003146'
  }};
  position: relative;
  line-height: 25px;
  height: 100%;
  overflow-y: auto;
`

StyledSidebarContainer.displayName = 'StyledSidebarContainer'

export default StyledSidebarContainer
