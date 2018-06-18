import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@hixme-ui/theme'

const AppContainer = ({
  children,
}) => (
  <BrowserRouter>
    <ThemeProvider>
      <div style={{ height: '100%' }}>
        {children}
      </div>
    </ThemeProvider>
  </BrowserRouter>
)

AppContainer.propTypes = {
  children: PropTypes.object.isRequired,
}

export default AppContainer
