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
  lightGreen: '#31d5a3',
  blue: '#3997E2',
  darkBlue: '#5874d0',
  red: '#FF1442',
  yellow: '#E0BC4D',
  purple: '#A374D2',
  green: '#88b963',
}

const gradients = {
  teal: 'linear-gradient(180deg, #20BCA1 0%, #159777 100%)',
  red: 'linear-gradient(0deg, #DE293C 0%, #FF7272 100%)',
  yellow: 'linear-gradient(-1deg, #FF8C00 0%, #F3C200 100%)',
  blue: 'linear-gradient(-1deg, #2583C4 0%, #30A0EE 100%)',
  darkBlue: 'linear-gradient(-1deg, #5874d0 0%, #313677 100%)',
  grey: 'linear-gradient(180deg, #CCD2D6 0%, #a4adb3 100%)',
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
  mini: '28px',
  small: '36px',
  default: '42px',
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

const buttonGradientColors = {
  primary: gradients.lightGreen,
  secondary: gradients.grey,
  default: gradients.darkBlue,
  red: gradients.red,
  danger: gradients.red,
  error: gradients.red,
  blue: gradients.blue,
  gold: gradients.yellow,
}

const backgroundColorStates = {
  darkBlue: {
    default: colors.darkBlue,
    hover: '#313677',
  },
  grey: {
    default: '#CCD2D6',
    hover: '#a4adb3',
  },
  default: {
    default: colors.darkBlue,
    hover: '#313677',
  },
  red: {
    default: '#DE293C',
    hover: '#FF7272',
  },
  yellow: {
    default: '#FF8C00',
    hover: '#F3C200',
  },
  blue: {
    default: '#2583C4',
    hover: '#30A0EE',
  },
}

const buttonColors = {
  primary: backgroundColorStates.darkBlue,
  secondary: backgroundColorStates.grey,
  default: backgroundColorStates.darkBlue,
  red: backgroundColorStates.red,
  danger: backgroundColorStates.red,
  error: backgroundColorStates.red,
  blue: backgroundColorStates.blue,
  gold: backgroundColorStates.yellow,
}


const shadows = {
  medium: '0px 5px 9px 0px rgba(56,59,60,0.22);',
  default: '0px 2px 6px 0px rgba(56,59,60,0.18);',
  none: '0px 0px 0px 0px rgba(0,0,0,0);',
}

const buttonBorderRadius = {
  none: '0',
  default: '4px',
}

/* eslint-disable max-len */
export const fontFamily = {
  thinnest: "'SF Pro Text', 'Arial', 'sans-serif'",
  thinner: "'SF Pro Text', 'Arial', 'sans-serif'",
  thin: "'SF Pro Text', 'Arial', 'sans-serif'",
  normal: "'SF Pro Text', 'Arial', 'sans-serif'",
  bold: "'SF Pro Text', 'Arial', 'sans-serif'",
  bolder: "'SF Pro Text', 'Arial', 'sans-serif'",
  boldest: "'SF Pro Text', 'Arial', 'sans-serif'",
}

const defaults = {
  gradient: gradients.darkBlue,
  fontSize: fontSizes.default,
  buttonHeight: buttonHeights.default,
  textColor: colors.grey30,
  fontFamily: fontFamily.normal,
  fontWeight: fontWeights.default,
  backgroundColor: colors.white,
  borderColor: colors.grey110,
  titleFontSize: titleFontSizes.default,
}

export const colorTheme = {
  default: colors.grey30,
  primary: colors.darkBlue,
  success: colors.lightGreen,
  warning: colors.yellow,
  error: colors.red,
  danger: colors.red,
  muted: colors.grey80,

  white: colors.white,
  black: colors.black,
  red: colors.red,
  blue: colors.blue,
  darkBlue: colors.darkBlue,
  purple: colors.purple,
  yellow: colors.yellow,
  green: colors.green,

  lighter: colors.grey110,
  light: colors.grey80,
  lightest: colors.grey130,
}

const outlineButtonColors = {
  ...colorTheme,
  default: colors.grey110,
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
  buttonColors,
  buttonGradientColors,
  buttonFontSizes,
  buttonHeights,
  buttonMinWidths,
  buttonBorderRadius,
  outlineButtonColors,
  defaults,
  fontSizes,
  fontFamily,
  fontWeights,
  gradients,
  shadows,
  textColors: {
    ...colorTheme,
    default: defaults.textColor,
  },
  titleFontSizes,
}

export default theme

export ThemeProvider from './ThemeProvider'
