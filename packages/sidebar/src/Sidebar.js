import React from 'react'
import PropTypes from 'prop-types'

// hixme-ui
import CloseButton from '@hixme-ui/close-button'

import Content from './Content'
import Header from './Header'
import IconSpan from './IconSpan'
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
    <Header>
      <h3>
        {header}
        <IconSpan>
          <CloseButton onClick={onClose} noLabel />
        </IconSpan>
      </h3>
    </Header>
    <Content>
      {children}
    </Content>
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
