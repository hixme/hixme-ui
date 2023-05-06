import {
  getButtonColor,
  getButtonBorderRadius,
 } from '@hixme-ui/theme-props'

import ButtonBase from './ButtonBase'

const GradientButton = ButtonBase.extend`
  :hover:enabled {
    background-color: ${props => getButtonColor(props).hover};
  };
  background: ${props => getButtonColor(props).default};
  background-size: 200%;
  border-style: none;
  border-radius: ${props => getButtonBorderRadius(props)};
  * {
    cursor: pointer;
  }
`

GradientButton.displayName = 'hui:GradientButton'
GradientButton.huiName = 'GradientButton'

export default GradientButton
