# Theme Props

Utility for parsing theme properties by CSS attribute name and props passed in by the component

```bash
npm i --save @hixme-ui/theme-props
```

## getThemePropsComposer(propsName, defaultValue)

Top level function by which all other theme prop utilities are built. The `propsName` should map to a object of values on the theme.

```js
import React from 'react'
import styled from 'styled-components'
import themeProps from '@hixme-ui/theme-props'

const theme = {
  colors: {
    white: '#ffffff',
    black: '#000000',
    red: '#ff0000',
    green: '#00ff00',
    blue: '#0000ff',
  }
}


const ColorText = styled.span`
  color: themeProps(colors, '#000')(props)
`

const App = () => (
  <ThemeProvider theme={theme}>
    <ColorText green>Hello!</ColorText>
    <ColorText blue>Hope you have a great day!</ColorText>
  </ThemeProvider>
)

```

## Theme props getters for the HUI theme

- getBackgroundColor()
- getBorderColor()
- getButtonBorderRadius()
- getButtonBorderRadius()
- getButtonFontSize()
- getButtonGradientColor()
- getButtonHeight()
- getButtonMinWidth()
- getFontFamily()
- getFontSize()
- getFontWeight()
- getShadow()
- getTextColor()

