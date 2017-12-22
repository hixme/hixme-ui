const getPadding = (props, defaultValue) => {
  const { padding, paddingLeft, paddingRight, paddingTop, paddingBottom, paddingSides } = props
  const fallbackPadding = defaultValue ? `padding: ${defaultValue};` : ''

  // apply default padding if padding is not provided
  let output = padding !== null ? `padding: ${padding};` : fallbackPadding

  // paddingSides applies padding-left and padding-right
  if (paddingSides) {
    output += `padding-left: ${paddingSides};padding-right: ${paddingSides}`
  }

  // apply the rest of the padding properties
  if (paddingLeft) output += `padding-left: ${paddingLeft};`
  if (paddingRight) output += `padding-right: ${paddingRight};`
  if (paddingBottom) output += `padding-bottom: ${paddingBottom};`
  if (paddingTop) output += `padding-top: ${paddingTop};`

  return output
}

export default getPadding

