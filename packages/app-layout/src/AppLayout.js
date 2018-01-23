import React, { Component } from 'react'
import PropTypes from 'prop-types'

import AppHeader from './components/AppHeader'
import AppSidebar from './components/AppSidebar'

import StyledSidebar from './StyledSidebar'
import StyledMain from './StyledMain'
import StyledContent from './StyledContent'

class AppLayout extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    HeaderComponent: PropTypes.func,
    SidebarComponent: PropTypes.func,
    open: PropTypes.bool,
    sidebarWidth: PropTypes.string,
  }

  static defaultProps = {
    open: false,
    HeaderComponent: null,
    SidebarComponent: null,
    sidebarWidth: '225px',
  }

  constructor(props) {
    super(props)
    this.state = {
      open: props.open,
    }
  }

  render() {
    const {
      children,
      HeaderComponent,
      SidebarComponent,
      open,
      sidebarWidth,
    } = this.props

    return (
      <div>
        <StyledSidebar>
          <AppSidebar>
            <SidebarComponent />
          </AppSidebar>
        </StyledSidebar>
        <StyledMain open={open} sidebarWidth={sidebarWidth}>
          <AppHeader sidebarWidth={sidebarWidth}>
            <HeaderComponent />
          </AppHeader>
          <StyledContent open={open}>
            {children}
          </StyledContent>
        </StyledMain>
      </div>
    )
  }
}

AppLayout.displayName = 'hui:AppLayout'
AppLayout.huiName = 'AppLayout'

export default AppLayout
