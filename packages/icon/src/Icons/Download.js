import React from 'react'
import BaseIcon from './BaseIcon'

/*eslint-disable */
export default class Printer extends BaseIcon {
  static defaultProps = {
    width: 22,
    height: 19,
    viewBox: '0 0 22 19'
 }
  render () {
    const { color } = this.props
    return (
      <svg {...this.getSvgProps()}>
        <g {...this.getPathProps()}>
          <g>
            <path d='M8 0h6v12H8z'/>
            <path d='M11 15L5 9h12'/>
          </g>
          <path
            d='M1.5 17.75h19'
            stroke={this.getStrokeColor()}
            strokeWidth='1.5'
            strokeLinecap='square'
            />
        </g>
      </svg>
    )
  }
}
/*eslint-enable */
