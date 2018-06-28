import {
  getButtonFlatColor,
  getButtonBorderRadius,
 } from '@hixme-ui/theme-props'

import ButtonBase from './ButtonBase'

const FlatButton = ButtonBase.extend`
  background: ${props => getButtonFlatColor(props)};
  border: 2px solid rgba(255, 255, 255, 0);
  border-radius: ${props => getButtonBorderRadius(props)};
  * {
    cursor: pointer;
  };
  :hover:enabled {
    filter: brightness(110%);
  };
  :active {
      border: 2px solid rgba(255, 255, 255, .5);
 }
`

FlatButton.displayName = 'hui:FlatButton'
FlatButton.huiName = 'FlatButton'

export default FlatButton
