import styled from 'styled-components'
import {
  getButtonGradientColor,
  getButtonBorderRadius,
 } from '@hixme-ui/theme-props'

import ButtonBase from './ButtonBase'

const GradientButton = styled(ButtonBase)`
  background: ${props => getButtonGradientColor(props)};
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
