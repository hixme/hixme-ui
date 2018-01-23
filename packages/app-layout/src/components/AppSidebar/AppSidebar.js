import React from 'react'
import PropTypes from 'prop-types'

import Container from '@hixme-ui/container'

import StyledSidebarContainer from './StyledSidebarContainer'

const AppSidebar = ({
  children,
}) => (
  <StyledSidebarContainer>
    <Container role='navigation'>
      {children}
    </Container>
  </StyledSidebarContainer>
)

AppSidebar.propTypes = {
  children: PropTypes.node,
}

AppSidebar.defaultProps = {
  children: null,
}

export default AppSidebar

