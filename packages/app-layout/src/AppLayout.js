import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import AppHeader from './components/AppHeader'
import AppSidebar from './components/AppSidebar'

import StyledSidebar from './StyledSidebar'
import StyledMain from './StyledMain'
import StyledContent from './StyledContent'

const AppLayoutOuterDiv = styled.div`
  height: 100%;
`

class AppLayout extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    HeaderComponent: PropTypes.func,
    SidebarComponent: PropTypes.func,
    open: PropTypes.bool,
    sidebarWidth: PropTypes.string,
    fixed: PropTypes.bool,
  }

  static defaultProps = {
    open: false,
    HeaderComponent: () => null,
    SidebarComponent: () => null,
    sidebarWidth: '225px',
    fixed: false,
  }

  state = { open: this.props.open }

  render() {
    const {
      HeaderComponent,
      SidebarComponent,
      children,
      fixed,
      sidebarWidth,
    } = this.props

    const {
      open,
    } = this.state

    const toggleSidebar = () => {
      this.setState(prevState => ({
        open: !prevState.open,
      }))
    }

    return (
      <AppLayoutOuterDiv>
        <StyledSidebar sidebarWidth={sidebarWidth}>
          <AppSidebar>
            <SidebarComponent />
          </AppSidebar>
        </StyledSidebar>
        <StyledMain open={open} sidebarWidth={sidebarWidth}>
          <AppHeader open={open} sidebarWidth={sidebarWidth} toggleSidebar={toggleSidebar} fixed={fixed}>
            <HeaderComponent />
          </AppHeader>
          <StyledContent fixed={fixed}>
            {children}
          </StyledContent>
        </StyledMain>
      </AppLayoutOuterDiv>
    )
  }
}

AppLayout.displayName = 'hui:AppLayout'
AppLayout.huiName = 'AppLayout'

export default AppLayout
