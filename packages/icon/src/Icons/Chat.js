import React from 'react'
import BaseIcon from './BaseIcon'

/*eslint-disable */
export default class Chat extends BaseIcon {
  static defaultProps = {
    width: 20,
    height: 20,
    viewBox: '0 0 20 20'
  }
  render () {
    return (
      <svg {...this.getSvgProps()}>
        <path  d='M18 0H2C.9 0 .01.9.01 2L0 20l4-4h14c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zM4 7h12v2H4V7zm8 5H4v-2h8v2zm4-6H4V4h12v2z'
          {...this.getPathProps()} fillRule='evenodd' />
      </svg>
    )
  }
}
/*eslint-enable */
