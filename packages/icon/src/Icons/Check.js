import React from 'react'
import BaseIcon from './BaseIcon'

/*eslint-disable */
export default class Check extends BaseIcon {
  static defaultProps = {
    width: 12,
    height: 10,
    viewBox: '0 0 12 10'
  }
  render () {
    const { color } = this.props
    return (
      <svg {...this.getSvgProps()}>
        <path
          d='M1 4.728l3.67 3.727L10.785 1'
          stroke={this.getStrokeColor()}
          fill='none'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          />
      </svg>
    )
  }
}
/*eslint-enable */
