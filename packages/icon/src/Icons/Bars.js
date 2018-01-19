import React from 'react'
import BaseIcon from './BaseIcon'

/*eslint-disable */
export default class Bars extends BaseIcon {
  static defaultProps = {
    width: 20,
    height: 17,
    viewBox: '2 4 20 17'
  }
  render () {
    return (
      <svg {...this.getSvgProps()}>
        <path d='M2 13.8571429h19.9535963V11H2v2.8571429zm0-7.00000004h19.9535963V4H2v2.85714286zM2 21h19.9535963v-2.8571429H2V21z'
          {...this.getPathProps()} />
      </svg>
    )
  }
}
/*eslint-enable */
