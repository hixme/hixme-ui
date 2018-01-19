import React from 'react'
import BaseIcon from './BaseIcon'

/*eslint-disable */
export default class Actions extends BaseIcon {
  static defaultProps = {
    width: 30,
    height: 30,
    viewBox: '0 0 30 30'
  }
  render () {
    return (
      <svg {...this.getSvgProps()}>
        <g>
          <path d='M0 1.88C0 .83.84 0 1.88 0h26.24C29.17 0 30 .84 30 1.88v26.24c0 1.05-.84 1.88-1.88 1.88H1.88C.83 30 0 29.16 0 28.12V1.88zm28.12 0H1.87v26.25h26.25V1.87z'
            {...this.getPathProps()} />
          <path d='M9.72 14.78c0 .9-.73 1.63-1.63 1.63-.9 0-1.7-.7-1.7-1.6 0-.9.73-1.6 1.62-1.6.9 0 1.62.75 1.62 1.65zm7.05 0c0 .9-.73 1.63-1.63 1.63-.9 0-1.63-.7-1.63-1.6 0-.9.8-1.6 1.7-1.6.9 0 1.64.75 1.64 1.65zm7.04 0c0 .9-.7 1.63-1.6 1.63-.9 0-1.6-.7-1.6-1.6 0-.9.76-1.6 1.66-1.6.9 0 1.6.75 1.6 1.65z'
            {...this.getPathProps()} />
        </g>
      </svg>
    )
  }
}
/*eslint-enable */
