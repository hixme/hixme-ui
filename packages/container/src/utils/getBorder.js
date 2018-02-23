const getBorder = (props, defaultValue) => {
  const { border, borderLeft, borderRight, borderTop, borderBottom, borderColor } = props
  const fallbackBorder = defaultValue ? `border: ${defaultValue};` : ''

  // apply default border if border is not provided
  let output = border !== null ? `border: ${border};` : fallbackBorder

  // apply the rest of the border properties
  if (borderLeft) output += `border-left: ${borderLeft};`
  if (borderRight) output += `border-right: ${borderRight};`
  if (borderBottom) output += `border-bottom: ${borderBottom};`
  if (borderTop) output += `border-top: ${borderTop};`
  if (borderColor) output += `border-color: ${borderColor};`

  return output
}

export default getBorder

