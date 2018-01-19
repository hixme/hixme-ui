import React from 'react'
import BaseIcon from './BaseIcon'

/*eslint-disable */
export default class LineChart extends BaseIcon {
  static defaultProps = {
    width: 20,
    height: 14,
    viewBox: '2 5 20 14'
  }
  render () {
    return (
      <svg {...this.getSvgProps()}>
        <path d='M4.08995097 15.7711775l1.19921568-1.508 1.91019608 2.6372c.2537255.3508.67568628.5336 1.10078432.476.42392157-.056.78431372-.3448.94-.7516l1.81568625-4.7232 2.6317647 6.3228c.1847059.4464.6113726.7312 1.0831373.7312.0219608 0 .0435294-.0004.0658823-.0016.4964706-.0292.9196079-.3708 1.0611765-.856l2.5054902-8.5988 1.1047059 2.3148c.2835294.596.9878431.8436 1.5721568.5536.5839216-.2892.8282353-1.0088.5435295-1.6036l-2.427451-5.0888c-.2129412-.4468-.6701961-.7112-1.1541177-.6712-.4854902.0408-.8933333.378-1.0317647.854l-2.4364706 8.3568-2.4784313-5.958c-.1870589-.4504-.6196079-.7384-1.1-.7316-.4788236.0068-.9039216.3068-1.0784314.7628l-2.0901961 5.4408-1.54784312-2.138c-.21764706-.2992-.5545098-.4772-.9192157-.4864-.3662745-.0088-.71098038.1536-.94039215.444l-2.15607843 2.7088c-.40980392.5144-.33254902 1.2708.17137255 1.6888.50392157.4176 1.2454902.3396 1.65529412-.1748z'
          {...this.getPathProps()} />
      </svg>
    )
  }
}
/*eslint-enable */
