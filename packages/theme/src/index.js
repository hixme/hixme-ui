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
  yellow: '#E0BC4D',
  purple: '#A374D2',
  green: '#88b963',
}

const gradients = {
  teal: 'linear-gradient(180deg, #20BCA1 0%, #159777 100%)',
  red: 'linear-gradient(0deg, #DE293C 0%, #FF7272 100%)',
  yellow: 'linear-gradient(-1deg, #FF8C00 0%, #F3C200 100%)',
  blue: 'linear-gradient(-1deg, #2583C4 0%, #30A0EE 100%)',
  grey: 'linear-gradient(180deg, #CCD2D6 0%, #a4adb3 100%);',
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
  mini: fontSizes.smaller,
  small: fontSizes.small,
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

const shadows = {
  medium: '0px 5px 9px 0px rgba(56,59,60,0.22);',
  low: '0px 2px 6px 0px rgba(56,59,60,0.18);',
  none: '0px 0px 0px 0px rgba(0,0,0,0);',
}

const borderRadius = '4px'

/* eslint-disable max-len */
export const fontFamily = {
  thinnest: '\'Avenir-Next_UltraLight\', \'HelveticaNeue-UltraLight\', \'Helvetica Neue Ultra Light\', \'Helvetica Neue\', Helvetica, Arial, \'Lucida Grande\', sans-serif',
  thinner: '\'Avenir-Next_Light\', \'HelveticaNeue-Thin\', \'Helvetica Neue Thin\', \'Helvetica Neue\', Helvetica, Arial, \'Lucida Grande\', sans-serif',
  thin: '\'Avenir-Next_Regular\', \'HelveticaNeue-Light\', \'Helvetica Neue Light\', \'Helvetica Neue\', Helvetica, Arial, \'Lucida Grande\', sans-serif',
  normal: '\'Avenir-Next_Medium\', \'HelveticaNeue-Roman\', \'Helvetica Neue Roman\', \'Helvetica Neue\', Helvetica, Arial, \'Lucida Grande\', sans-serif',
  bold: '\'Avenir-Next_Demi\', \'HelveticaNeue-Medium\', \'Helvetica Neue Medium\', \'Helvetica Neue\', Helvetica, Arial, \'Lucida Grande\', sans-serif',
  bolder: '\'Avenir-Next_Bold\', \'HelveticaNeue-Bold\', \'Helvetica Neue Bold\', \'Helvetica Neue\', Helvetica, Arial, \'Lucida Grande\', sans-serif',
  boldest: '\'Avenir-Next_Heavy\', \'HelveticaNeue-Heavy\', \'Helvetica Neue Heavy\', \'Helvetica Neue\', Helvetica, Arial, \'Lucida Grande\', sans-serif',
}

const defaults = {
  gradient: gradients.teal,
  fontSize: fontSizes.default,
  buttonHeight: buttonHeights.default,
  textColor: colors.grey30,
  fontFamily: fontFamily.normal,
  backgroundColor: colors.white,
  borderRadius,
  titleFontSize: titleFontSizes.default,
}

export const colorTheme = {
  default: colors.grey30,
  primary: colors.teal,
  success: colors.teal,
  warning: colors.yellow,
  error: colors.red,
  muted: colors.grey110,

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

const theme = {
  fontFamily,
  titleFontSizes,
  textColors: colorTheme,
  backgroundColors: colorTheme,
  borderColors: colorTheme,
  gradients,
  buttonFontSizes,
  buttonHeights,
  buttonMinWidths,
  fontSizes,
  defaults,
  shadows,
}

export default theme
