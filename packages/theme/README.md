# Theme

```bash
npm i --save @hixme-ui/theme
```

## Theme

HUI theme colors and defaults

```javascript
import theme from '@hixme-ui/theme'

const primary = theme.colors.primary
```


## ThemeProvider

HUI theme provider, which is just an implementation of styled-components
ThemeProvider with the HUI theme as the default

```javascript
import { ThemeProvider } from '@hixme-ui/theme'

const App = ({ children }) => (
  <ThemeProvider>
    {children}
  </ThemeProvider>
)
```

### withGlobal prop

The HUI was built with some global settings, including the [normalize CSS](https://necolas.github.io/normalize.css/). These global styles are not set by default and are enabled by adding the `withGlobal` property on the ThemeProvider.

```javascript

const App = ({ children }) => (
  <ThemeProvider withGlobal>
    {children}
  </ThemeProvider>
)
```
 

