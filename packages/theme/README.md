# hixme-ui theme

```bash
npm i --save @hixme-ui/theme
```

## Theme

HUI theme colors and defaults

```javascript
import theme from '@hixme-ui/theme

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
