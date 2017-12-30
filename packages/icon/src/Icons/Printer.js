import React from 'react'
import BaseIcon from './BaseIcon'

/*eslint-disable */
export default class Printer extends BaseIcon {
  static defaultProps = {
    width: 24,
    height: 24,
    viewBox:  '0 0 24 24'
  }
  render () {
    return (
      <svg {...this.getSvgProps()}>
        <g {...this.getPathProps()}>
          <path d='M7.5 18H15v1.5H7.5zM6 1.5h12v3h1.5v-3C19.5.672 18.83 0 18 0H6c-.828 0-1.5.672-1.5 1.5v3H6v-3zM7.5 15h9v1.5h-9z'/>
          <path d='M22.5 6h-21C.672 6 0 6.672 0 7.5v9c0 .83.672 1.5 1.5 1.5h3v4.5c0 .83.672 1.5 1.5 1.5h12c.83 0 1.5-.67 1.5-1.5V18h3c.83 0 1.5-.67 1.5-1.5v-9c0-.828-.67-1.5-1.5-1.5zM18 22.5H6v-9h12v9zm3-12c-.83 0-1.5-.67-1.5-1.5 0-.828.67-1.5 1.5-1.5s1.5.672 1.5 1.5c0 .83-.67 1.5-1.5 1.5z'/>
        </g>
      </svg>
    )
  }
}
/*eslint-enable */
