import React from 'react'
import BaseIcon from './BaseIcon'

/*eslint-disable */
export default class HeartOutline extends BaseIcon {
  static defaultProps = {
    width: 26,
    height: 24,
    viewBox: '0 0 26 24'
  }
  render () {
    return (
      <svg {...this.getSvgProps()}>
        <path d='M18.625.75C16.45.75 14.3625 1.7625 13 3.3625 11.6375 1.7625 9.55.75 7.375.75 3.525.75.5 3.775.5 7.625.5 12.35 4.75 16.2 11.1875 22.05L13 23.6875l1.8125-1.65C21.25 16.2 25.5 12.35 25.5 7.625c0-3.85-3.025-6.875-6.875-6.875zm-5.5 19.4375l-.125.125-.125-.125C6.925 14.8 3 11.2375 3 7.625c0-2.5 1.875-4.375 4.375-4.375 1.925 0 3.8 1.2375 4.4625 2.95h2.3375c.65-1.7125 2.525-2.95 4.45-2.95 2.5 0 4.375 1.875 4.375 4.375 0 3.6125-3.925 7.175-9.875 12.5625z'
          {...this.getPathProps()} />
      </svg>
    )
  }
}
/*eslint-enable */
