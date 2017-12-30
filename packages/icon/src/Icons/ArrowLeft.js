import React from 'react'
import BaseIcon from './BaseIcon'

/*eslint-disable */
export default class ArrowLeft extends BaseIcon {
  static defaultProps = {
    width: 7,
    height: 14,
    viewBox: '22 20 7 14'
  }
  render () {
    return (
      <svg {...this.getSvgProps()}>
        <path d='M27.864 22L23 27.25l4.864 5.25'
          stroke={this.getStrokeColor()}
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          fill='none'
          />
      </svg>
    )
  }
}
/*eslint-enable */
