import React from 'react'
import PropTypes from 'prop-types'

import Icon from '@hixme-ui/icon'

import StyledHeaderContainer from './StyledHeaderContainer'
import StyledIcon from './StyledIcon'

export const AppHeader = ({
  children,
  fixed,
  toggleSidebar,
  open,
  sidebarWidth,
}) => (
  <StyledHeaderContainer open={open} fixed={fixed} sidebarWidth={sidebarWidth}>
    <StyledIcon onClick={toggleSidebar}>
      <Icon menu light size={1.6} />
    </StyledIcon>
    {children}
  </StyledHeaderContainer>
)

AppHeader.propTypes = {
  children: PropTypes.node,
  fixed: PropTypes.bool,
  toggleSidebar: PropTypes.func,
  open: PropTypes.bool,
  sidebarWidth: PropTypes.string,
}

/* eslint-disable no-console */
AppHeader.defaultProps = {
  children: null,
  fixed: true,
  toggleSidebar: () => console.error('AppHeader: Sidebar toggle implementation not found'),
  open: false,
  sidebarWidth: '225px',
}

export default AppHeader

