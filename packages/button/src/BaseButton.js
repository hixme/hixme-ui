import styled from 'styled-components'
import {
  getButtonGradientColor,
  getButtonTextColor,
  getButtonBorderRadius,
  getButtonHeight,
  getButtonMinWidth,
  getButtonFontSize,
  getShadow,
 } from '@hixme-ui/theme-props'

const BaseButton = styled.button`
  transition: all .25s ease;
  :hover:enabled {
    background-size: 100%;
  };
  :active:enabled {
    box-shadow: ${props => getShadow(props, 'none')};
  };
  :disabled {
    opacity: .4;
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
  background: ${props => getButtonGradientColor(props)};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-size: 200%;
  outline: none;
  cursor: pointer;
  padding: 0.25em 1em;
  border-radius: ${props => getButtonBorderRadius(props)};
`

export default BaseButton
