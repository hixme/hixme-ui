import React from 'react'
import BaseIcon from './BaseIcon'

/*eslint-disable */
export default class Concealed extends BaseIcon {
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
          <path d="M-1-3h24v24H-1"/>
          <path d="M11 4c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.5-1.26 2.7-2.9 3.43-4.75-1.75-4.4-6-7.5-11-7.5-1.4 0-2.76.25-4 .7l2.16 2.16C9.74 4.13 10.36 4 11 4zM1 1.27l2.28 2.28.46.46C2.08 5.3.78 7.04 0 9c1.73 4.4 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L18.73 19 20 17.73 2.27 0 1 1.27zM6.53 6.8l1.55 1.55c-.05.2-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.4.53-2.2.53-2.76 0-5-2.24-5-5 0-.8.2-1.53.53-2.2zm4.3-.78L14 9.17V9c0-1.65-1.33-3-3-3l-.16.02z" fill={svgColor}/>
        </g>
      </svg>
    )
  }
}
/*eslint-enable */
