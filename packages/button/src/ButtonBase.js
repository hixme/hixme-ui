import styled from 'styled-components'
import {
  getButtonTextColor,
  getButtonBorderRadius,
  getButtonHeight,
  getButtonMinWidth,
  getButtonFontSize,
 } from '@hixme-ui/theme-props'

const ButtonBase = styled.button`
  transition: all .25s ease;
  :disabled {
    opacity: .5;
    cursor: not-allowed;
  };
  height: ${props => getButtonHeight(props)};
  min-width: ${props => getButtonMinWidth(props)};
  max-width: ${props => (props.maxWidth ? props.maxWidth : 'none')};
  width: ${(props) => {
    if (props.width) return props.width
    if (props.block) return '100%'
    return 'auto'
  }};
  font-size:${props => getButtonFontSize(props)};
  color: ${props => getButtonTextColor(props)};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-size: 200%;
  outline: none;
  cursor: pointer;
  padding: 0.25em 1em;
  border-radius: ${props => getButtonBorderRadius(props)};
  * {
    cursor: pointer;
  }
`

ButtonBase.displayName = 'hui:ButtonBase'
ButtonBase.huiName = 'ButtonBase'

export default ButtonBase
