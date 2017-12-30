import React from 'react'
import BaseIcon from './BaseIcon'

/*eslint-disable */
export default class XShield extends BaseIcon {
  static defaultProps = {
    width: 18,
    height: 22,
    viewBox: '0 0 18 22'
  }
  render () {
    return (
      <svg {...this.getSvgProps()}>
        <path d='M16 0H2C.9 0 0 .9 0 2v12.93c0 .7.35 1.3.88 1.66L9 22l8.1-5.4c.54-.37.9-.98.9-1.67V2c0-1.1-.9-2-2-2zm-2 12.6L12.6 14 9 10.4 5.4 14 4 12.6 7.6 9 4 5.4 5.4 4 9 7.6 12.6 4 14 5.4 10.4 9l3.6 3.6z'
          {...this.getPathProps()} />
      </svg>
    )
  }
}
/*eslint-enable */
