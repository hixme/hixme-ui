import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@hixme-ui/theme'
import GlobalStylesInjector from './GlobalStylesInjector'

const AppContainer = ({
  children
}) => (
  <BrowserRouter>
    <ThemeProvider>
      <GlobalStylesInjector>
        <div style={{ height: '100%' }}>
          {children}
        </div>
      </GlobalStylesInjector>
    </ThemeProvider>
  </BrowserRouter>
)

AppContainer.propTypes = {
  children: PropTypes.object.isRequired,
}

export default AppContainer
