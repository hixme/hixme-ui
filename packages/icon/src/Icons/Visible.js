import React from 'react'
import BaseIcon from './BaseIcon'

/*eslint-disable */
export default class Visible extends BaseIcon {
  static defaultProps = {
    width: 22,
    height: 16,
    viewBox: '0 0 22 16'
  }
  render () {
    const svgColor = this.props.fill !== 'inherit' ? this.props.fill : '#000'
    return (
      <svg {...this.getSvgProps()}>
        <g fill="none" fillRule="evenodd">
          <path d="M-1-4h24v24H-1"/>
          <path d="M11 .5C6 .5 1.73 3.6 0 8c1.73 4.4 6 7.5 11 7.5s9.27-3.1 11-7.5C20.27 3.6 16 .5 11 .5zM11 13c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8C9.34 5 8 6.34 8 8s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" fill={svgColor}/>
        </g>
      </svg>
    )
  }
}
/*eslint-enable */
