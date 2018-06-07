# Theme Props

Utility for parsing theme properties by CSS attribute name and props passed in by the component

```bash
npm i --save @hixme-ui/theme-props
```

## Theme props getters for the HUI theme

These are named exports from the theme props package. The default function uses the the base `theme.colors` object as shown above.

This container example defaults to `none` for the background, but if `white` is sent a boolean prop, it will add the blue background color from the theme. 

```js
import styled from 'styled-components'
import { getBackgroundColor } from '@hixme-ui/theme-props'

const Container = styled.div`
  background: ${(props) => getBackgroundColor(props, 'none')
`
```

- getBackgroundColor() `theme.backgroundColors`
- getBorderColor() `theme.borderColors`
- getButtonBorderRadius() `theme.buttonBorderRadius`
- getButtonFontSize() `theme.fontSizes`
- getButtonGradientColor() `theme.buttonGradientColors`
- getButtonHeight() `theme.buttonHeights`
- getButtonMinWidth() `theme.buttonMinWidths`
- getButtonTextColor() `theme.buttonTextColors`
- getFontFamily() `theme.fontFamily`
- getFontSize() `theme.fontSizes`
- getFontWeight() `theme.fontWeights`
- getOutlineButtonColor() `theme.outlineButtonColors`
- getShadow() `theme.shadows`
- getTextColor() `theme.textColors`


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
  color: ${props => getTextColor(props, '#000000')};
`

const App = () => (
  <ThemeProvider theme={theme}>
    <ColorText green>Hello!</ColorText>
    <ColorText blue>Hope you have a great day!</ColorText>
  </ThemeProvider>
)

```
