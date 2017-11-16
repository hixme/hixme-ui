export function getThemePropsComposer(propName = 'colors', defaultValue = '') {
  return ({ theme = {}, ...props = {} } = {}, defaultValueOverride) => {
    const propGroup = theme[propName]
    const foundProp = propGroup && Object.keys(propGroup).find(prop => props[prop])
    return foundProp ? propGroup[foundProp] : defaultValueOverride || propGroup.default || defaultValue
  }
}

export const getBorderColor = getThemePropsComposer('borderColors', 'inherit')
export const getBackgroundColor = getThemePropsComposer('backgroundColors', 'inherit')
export const getFontFamily = getThemePropsComposer('fontFamily', 'inherit')
export const getFontSize = getThemePropsComposer('fontSizes', 'inherit')
export const getTextColor = getThemePropsComposer('textColors', 'inherit')

export default getThemePropsComposer()
