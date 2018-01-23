import React from 'react'
import PropTypes from 'prop-types'

import Container from '@hixme-ui/container'

import StyledSidebarContainer from './StyledSidebarContainer'

const AppSidebar = ({
  userName,
  logout,
  children,
  className,
  ...restProps
}) => (
  <StyledSidebarContainer {...restProps} className={className}>
    <Container role='navigation'>
      {children}
    </Container>
  </StyledSidebarContainer>
)

AppSidebar.propTypes = {
  logout: PropTypes.func.isRequired,
  userName: PropTypes.string.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
}

/* eslint-disable no-console */
AppSidebar.defaultProps = {
  logout: () => {
    console.error('AppSidebar: Logout not implemented properly')
  },
  children: null,
  className: null,
  userName: 'User Name',
}

export default AppSidebar

