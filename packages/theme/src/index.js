export const colors = {
  white: 'white',
  black: 'black',
  grey30: '#3A4951',
  grey80: '#8F9DA8',
  grey100: '#AAB5BD',
  grey110: '#B9C5CD',
  grey120: '#CBD6DB',
  grey130: '#f7fcff',
  teal: '#2EAE8F',
  blue: '#3997E2',
  red: '#EB5565',
  yellow: '#ecb718',
  purple: '#A374D2',
  green: '#88b963',
}

const fontSizes = {
  jumbo: '22px',
  larger: '20px',
  large: '18px',
  medium: '16px',
  default: '14px',
  small: '12px',
  smaller: '10px',
  smallest: '8px',
}

const fontWeights = {
  default: 'normal',
  thinnest: '100',
  thinner: '200',
  thin: '300',
  normal: 'normal',
  bold: '700',
  bolder: '800',
  boldest: '900',
}

const titleFontSizes = {
  jumbo: '38px',
  larger: '36px',
  large: '34px',
  medium: '32px',
  default: '30px',
  small: '28px',
  smaller: '26px',
  smallest: '24px',
}

const buttonFontSizes = {
  mini: fontSizes.small,
  small: fontSizes.default,
  large: fontSizes.large,
  jumbo: fontSizes.jumbo,
}

const buttonHeights = {
  mini: '26px',
  small: '31px',
  default: '36px',
  large: '50px',
  jumbo: '65px',
}

const buttonMinWidths = {
  mini: '80px',
  small: '80px',
  default: '100px',
  large: '100px',
  jumbo: '100px',
}

const buttonTextColors = {
  default: colors.white,
}

const buttonFlatColors = {
  primary: colors.teal,
  secondary: colors.grey80,
  default: colors.teal,
  red: colors.red,
  danger: colors.red,
  error: colors.red,
  blue: colors.blue,
  gold: colors.yellow,
}

const shadows = {
  medium: '0px 2px 6px 0px rgba(56,59,60,0.22);',
  default: '0px 1px 4px 0px rgba(56,59,60,0.18);',
  none: '0px 0px 0px 0px rgba(0,0,0,0);',
}

const buttonBorderRadius = {
  none: '0',
  default: '2px',
}

const defaults = {
  fontSize: fontSizes.default,
  buttonHeight: buttonHeights.default,
  textColor: colors.grey30,
  fontWeight: fontWeights.default,
  backgroundColor: colors.white,
  borderColor: colors.grey80,
  titleFontSize: titleFontSizes.default,
}

export const colorTheme = {
  default: colors.grey30,
  primary: colors.teal,
  success: colors.teal,
  warning: colors.yellow,
  error: colors.red,
  danger: colors.red,
  muted: colors.grey80,

  white: colors.white,
  black: colors.black,
  red: colors.red,
  blue: colors.blue,
  purple: colors.purple,
  yellow: colors.yellow,
  green: colors.green,

  lighter: colors.grey110,
  light: colors.grey80,
  lightest: colors.grey130,
}

const outlineButtonColors = {
  ...colorTheme,
  default: colors.grey80,
}

const theme = {
  colors: colorTheme,
  backgroundColors: {
    ...colorTheme,
    default: defaults.backgroundColor,
  },
  borderColors: {
    ...colorTheme,
    default: defaults.borderColor,
  },
  buttonTextColors,
  buttonFlatColors,
  buttonFontSizes,
  buttonHeights,
  buttonMinWidths,
  buttonBorderRadius,
  outlineButtonColors,
  defaults,
  fontSizes,
  fontWeights,
  shadows,
  textColors: {
    ...colorTheme,
    default: defaults.textColor,
  },
  titleFontSizes,
}

export default theme

export ThemeProvider from './ThemeProvider'
