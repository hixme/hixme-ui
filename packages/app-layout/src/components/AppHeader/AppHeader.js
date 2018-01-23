import React from 'react'
import PropTypes from 'prop-types'

import Icon from '@hixme-ui/icon'

import StyledHeaderContainer from './StyledHeaderContainer'
import StyledIcon from './StyledIcon'

export const AppHeader = ({
  children,
  companyName,
  fixed,
  onToggleSidebar,
  open,
  sidebarWidth,
  ...restProps
}) => (
  <StyledHeaderContainer open={open} fixed={fixed} {...restProps}>
    <StyledIcon onClick={onToggleSidebar}>
      <Icon menu light size={1.6} />
    </StyledIcon>
    {children}
  </StyledHeaderContainer>
)

AppHeader.propTypes = {
  children: PropTypes.node,
  companyName: PropTypes.string,
  fixed: PropTypes.bool,
  onToggleSidebar: PropTypes.func,
  open: PropTypes.bool,
  sidebarWidth: PropTypes.string.isRequired,
}

/* eslint-disable no-console */
AppHeader.defaultProps = {
  children: null,
  companyName: 'Company Name',
  fixed: true,
  onToggleSidebar: () => console.error('AppHeader: Sidebar toggle implementation not found'),
  open: false,
}

export default AppHeader

