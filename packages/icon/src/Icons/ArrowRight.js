import React from 'react'
import BaseIcon from './BaseIcon'

/*eslint-disable */
export default class ArrowRight extends BaseIcon {
  static defaultProps = {
    width: 8,
    height: 14,
    viewBox: '15 20 8 14'
  }
  render () {
    return (
      <svg {...this.getSvgProps()}>
        <path d='M17 32.5l4.864-5.25L17 22'
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
