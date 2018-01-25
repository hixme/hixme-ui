import React from 'react'
import PropTypes from 'prop-types'

// hixme-ui
import CloseButton from '@hixme-ui/close-button'

import IconSpan from './IconSpan'
import StyledSidebarContent from './StyledSidebarContent'
import StyledSidebarHeader from './StyledSidebarHeader'
import Wrapper from './Wrapper'

const Sidebar = ({
  children,
  header,
  onClose,
  open,
  sidebarWidth,
  style,
  topOffset,
}) => (
  <Wrapper topOffset={topOffset} open={open} sidebarWidth={sidebarWidth} style={style}>
    <StyledSidebarHeader>
      <h3>
        {header}
        <IconSpan>
          <CloseButton onClick={onClose} noLabel />
        </IconSpan>
      </h3>
    </StyledSidebarHeader>
    <StyledSidebarContent>
      {children}
    </StyledSidebarContent>
  </Wrapper>
)

Sidebar.propTypes = {
  children: PropTypes.node.isRequired,
  header: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool,
  sidebarWidth: PropTypes.string,
  style: PropTypes.object,
  topOffset: PropTypes.number,
}

Sidebar.defaultProps = {
  header: '',
  open: false,
  sidebarWidth: '300px',
  style: {},
  topOffset: 58,
}

export default Sidebar
