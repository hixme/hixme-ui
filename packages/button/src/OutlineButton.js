import {
  getBorderColor,
  getShadow,
  getOutlineButtonColor,
 } from '@hixme-ui/theme-props'

import BaseButton from './BaseButton'

const OutlineButton = BaseButton.extend`
  :hover:enabled {
    box-shadow: ${props => getShadow(props)};
  };
  :active:enabled {
    border-color: white;
  };
  border-color: ${props => getBorderColor(props)};
  color: ${props => getOutlineButtonColor(props)};
  background: white;
  border-style: solid;
  border-width: 1px;
`

OutlineButton.displayName = 'hui:OutlineButton'
OutlineButton.huiName = 'OutlineButton'

export default OutlineButton
