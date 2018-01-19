import React from 'react'
import BaseIcon from './BaseIcon'

/*eslint-disable */
export default class Automated extends BaseIcon {
  static defaultProps = {
    width: 21,
    height: 19,
    viewBox: '0 0 21 19'
  }
  render () {
    return (
      <svg {...this.getSvgProps()}>
          <path d='M4.1.8L.3 9.84h2.9L0 18.34l9.94-11.1h-4.1L8.78.77' {...this.getPathProps()} />
      </svg>
    )
  }
}
/*eslint-enable */

