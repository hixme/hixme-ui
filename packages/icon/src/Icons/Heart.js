import React from 'react'
import BaseIcon from './BaseIcon'

/*eslint-disable */
export default class Heart extends BaseIcon {
  static defaultProps = {
    width: 26,
    height: 24,
    viewBox: '0 0 26 24'
  }
  render () {
    return (
      <svg {...this.getSvgProps()}>
        <path d='M18.63.75c-2.18 0-4.27 1-5.63 2.6-1.36-1.6-3.45-2.6-5.63-2.6C3.54.75.5 3.78.5 7.63c0 4.72 4.25 8.57 10.7 14.42L13 23.7l1.8-1.66c6.45-5.84 10.7-9.7 10.7-14.4 0-3.86-3.02-6.9-6.88-6.9z'
          {...this.getPathProps()} />
      </svg>
    )
  }
}
/*eslint-enable */
