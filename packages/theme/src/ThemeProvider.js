import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import GlobalStylesContainer from './GlobalStylesContainer'
import theme from './index'

export default function HUIThemeProvider({ children, withGlobal, ...props }) {
  const output = withGlobal ?
    (<GlobalStylesContainer>
      {children}
    </GlobalStylesContainer>) : children
  return (
    <ThemeProvider theme={props.theme || theme}>
      {output}
    </ThemeProvider>
  )
}

HUIThemeProvider.propTypes = {
  children: PropTypes.element.isRequired,
  theme: PropTypes.object,
  withGlobal: PropTypes.bool,
}

HUIThemeProvider.defaultProps = {
  theme,
  withGlobal: false,
}

HUIThemeProvider.displayName = 'hui:ThemeProvider'

