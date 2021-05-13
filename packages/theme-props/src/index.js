export function getThemePropsComposer(propName = 'colors', defaultValue = '') {
  return ({ theme = {}, ...props = {} } = {}, defaultValueOverride) => {
    const propGroup = theme[propName]
    const foundProp = propGroup && Object.keys(propGroup).find(prop => props[prop])
    return foundProp ? propGroup[foundProp] : defaultValueOverride || propGroup.default || defaultValue
  }
}

export const getBackgroundColor = getThemePropsComposer('backgroundColors', 'inherit')
export const getBorderColor = getThemePropsComposer('borderColors', 'inherit')
export const getFontFamily = getThemePropsComposer('fontFamily', 'inherit')
export const getFontSize = getThemePropsComposer('fontSizes', 'inherit')
export const getFontWeight = getThemePropsComposer('fontWeights', 'inherit')
export const getTextColor = getThemePropsComposer('textColors', 'inherit')

export const getButtonBorderRadius = getThemePropsComposer('buttonBorderRadius')
export const getButtonFontSize = getThemePropsComposer('buttonFontSizes')
export const getButtonColor = getThemePropsComposer('buttonColors')
export const getButtonGradientColor = getThemePropsComposer('buttonGradientColors')
export const getButtonHeight = getThemePropsComposer('buttonHeights')
export const getButtonMinWidth = getThemePropsComposer('buttonMinWidths')
export const getButtonTextColor = getThemePropsComposer('buttonTextColors')
export const getOutlineButtonColor = getThemePropsComposer('outlineButtonColors')

export const getShadow = getThemePropsComposer('shadows')

export default getThemePropsComposer()
