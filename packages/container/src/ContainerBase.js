import styled from 'styled-components'
import { colors } from '@hixme-ui/theme'
import { getBackgroundColor } from '@hixme-ui/theme-props'

import getMargin from './utils/getMargin'
import getPadding from './utils/getPadding'
import getBorder from './utils/getBorder'

const flexKeys = ['flex', 'inlineFlex', 'flexRow', 'flexColumn', 'flexBasis', 'flexGrow', 'flexShrink']
const isFlex = props => Object.keys(props).filter(prop => flexKeys.includes(prop) && props[prop]).length > 0
const getFlexProps = (props) => {
  if (isFlex(props)) {
    let output = props.inlineFlex ? 'display: inline-flex;' : 'display: flex;'

    if (props.flexWrap) output += 'flex-wrap: wrap;'

    // Flex Direction
    if (props.flexRow) output += 'flex-direction: row;'
    if (props.flexColumn) output += 'flex-direction: column;'

    // Justify Content - booleans
    if (props.justifyStart) output += 'justify-content: flex-start;'
    if (props.justifyEnd) output += 'justify-content: flex-end;'
    if (props.justifyCenter) output += 'justify-content: center;'
    if (props.justifySpaceBetween) output += 'justify-content: space-between;'
    if (props.justifySpaceAround) output += 'justify-content: space-around;'

    // Align Items - booleans
    if (props.alignStart) output += 'align-items: flex-start;'
    if (props.alignEnd) output += 'align-items: flex-end;'
    if (props.alignCenter) output += 'align-items: center;'
    if (props.alignSpaceBetween) output += 'align-items: space-between;'
    if (props.alignSpaceAround) output += 'align-items: space-around;'

    // Flex settings - strings
    if (props.direction) output += `flex-direction: ${props.direction};`
    if (props.alignItems) output += `align-items: ${props.alignItems};`
    if (props.alignContent) output += `align-content: ${props.alignContent};`
    if (props.justifyContent) output += `justify-content: ${props.justifyContent};`
    if (props.alignSelf) output += `align-self: ${props.alignSelf};`
    if (props.flexBasis) output += `flex-basis: ${props.flexBasis};`
    if (props.flexGrow) output += `flex-grow: ${props.flexGrow};`
    if (props.flexShrink) output += `flex-shrink: ${props.flexShrink};`

    return output
  }
  return ''
}

const getAnimate = ({ animate, heavyShadow }) => {
  if (animate) {
    const hoverShadow = heavyShadow ? `0px 6px 16px 0px ${colors.grey100}` : `0px 6px 9px 0px ${colors.grey120}`
    return `transition: box-shadow .2s ease-in-out;
            &:hover { box-shadow: ${hoverShadow}; };`
  }
  return ''
}

const getTextAlign = ({ textAlign, textLeft, textCenter, textRight }) => {
  if (textLeft) return 'text-align: left;'
  if (textCenter) return 'text-align: center;'
  if (textRight) return 'text-align: right;'
  if (textAlign) return `text-align: ${textAlign};`
  return ''
}

const ContainerBase = styled.div`
  background: ${(props) => {
    if (props.background) return props.background
    return getBackgroundColor(props, 'none')
  }};
  ${getTextAlign}
  ${getFlexProps}
  ${({ dashed }) => dashed && 'border: 2px dashed;'}
  ${({ heavyShadow }) => heavyShadow && `box-shadow: 0px 3px 10px 0px ${colors.grey100};`}
  ${({ height }) => height && `height: ${height};`}
  ${({ maxHeight }) => maxHeight && `max-height: ${maxHeight};`}
  ${({ maxWidth }) => maxWidth && `max-width: ${maxWidth};`}
  ${({ minHeight }) => minHeight && `min-height: ${minHeight};`}
  ${({ minWidth }) => minWidth && `min-width: ${minWidth};`}
  ${({ noPadding, ...props }) => (noPadding ? 'padding: 0;' : getPadding(props))}
  ${({ opacity }) => opacity && `opacity: ${opacity};`}
  ${({ rounded }) => rounded && 'border-radius: 6px;'}
  ${({ shadow }) => shadow && `box-shadow: 0 3px 3px ${colors.grey120};`}
  ${({ width }) => width && `width: ${width};`}
  ${({ withOutline }) => withOutline && 'outline: 1px solid red;'}
  ${getBorder}
  ${getMargin}
  ${getBorder}
  ${getMargin}
  ${getAnimate};
`

ContainerBase.displayName = 'hui:ContainerBase'
ContainerBase.huiName = 'ContainerBase'

export default ContainerBase

