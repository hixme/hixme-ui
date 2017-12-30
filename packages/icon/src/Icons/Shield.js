import React from 'react'
import BaseIcon from './BaseIcon'

/*eslint-disable */
export default class Shield extends BaseIcon {
  static defaultProps = {
    width: 18,
    height: 22,
    viewBox: '0 0 18 22'
  }
  render () {
    return (
      <svg {...this.getSvgProps()}>
        <path d='M16 0H2C.9 0 0 .9 0 2v12.93c0 .7.35 1.3.88 1.66L9 22l8.1-5.4c.54-.37.9-.98.9-1.67V2c0-1.1-.9-2-2-2zM7 15l-5-5 1.4-1.4L7 12.16l7.6-7.6L16 6l-9 9z'
          {...this.getPathProps()} />
      </svg>
    )
  }
}
/*eslint-enable */
