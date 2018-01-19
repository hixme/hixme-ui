import React from 'react'
import BaseIcon from './BaseIcon'

/*eslint-disable */
export default class CheckMarkCircle extends BaseIcon {
  static defaultProps = {
    width: 15,
    height: 15,
    viewBox: '0 0 15 15'
  }
  render () {
    const svgColor = this.props.fill !== 'inherit' ? this.props.fill : '#677786'
    return (
      <svg {...this.getSvgProps()}>
        <path d="M7.5 15C3.36 15 0 11.64 0 7.5 0 3.36 3.36 0 7.5 0 11.64 0 15 3.36 15 7.5c0 4.14-3.36 7.5-7.5 7.5zM4.76 6.43L3 8.2l3.48 3.48L13 4.88 11.24 3.1 6.47 8.16l-1.7-1.72z" fill={svgColor}/>
      </svg>
    )
  }
}
/*eslint-enable */
