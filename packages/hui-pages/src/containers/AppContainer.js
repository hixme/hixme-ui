import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@hixme-ui/theme'
import GlobalStylesInjector from './GlobalStylesInjector'

const AppContainer = ({
  children,
}) => (
  <BrowserRouter>
    <ThemeProvider>
      <GlobalStylesInjector>
        <div style={{ height: '100%' }}>
          <div style={{ position: 'fixed', top: 10, right: 10 }}>
            <a className='github-button' href='https://github.com/hixme/hixme-ui' data-size='large' aria-label='Star hixme/hixme-ui on GitHub'>Star</a>
          </div>
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
