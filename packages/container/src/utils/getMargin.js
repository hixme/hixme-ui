const getMargin = (props, defaultValue) => {
  const { margin, marginLeft, marginRight, marginTop, marginBottom, marginSides } = props
  const fallbackMargin = defaultValue ? `margin: ${defaultValue};` : ''

  // apply default margin if margin is not provided
  let output = margin !== null ? `margin: ${margin};` : fallbackMargin

  // marginSides applies margin-left and margin-right
  if (marginSides) {
    output += `margin-left: ${marginSides};margin-right: ${marginSides};`
  }

  // apply other margin properties
  if (marginTop) output += `margin-top: ${marginTop};`
  if (marginBottom) output += `margin-bottom: ${marginBottom};`
  if (marginLeft) output += `margin-left: ${marginLeft};`
  if (marginRight) output += `margin-right: ${marginRight};`

  return output
}

export default getMargin

