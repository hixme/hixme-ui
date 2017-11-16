import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import theme from './index'

export default function HUIThemeProvider({ children, ...props }) {
  return (
    <ThemeProvider theme={props.theme || theme}>
      {children}
    </ThemeProvider>
  )
}

HUIThemeProvider.propTypes = {
  children: PropTypes.element.isRequired,
  theme: PropTypes.object,
}

HUIThemeProvider.defaultProps = {
  theme,
}

HUIThemeProvider.displayName = 'hui:ThemeProvider'

