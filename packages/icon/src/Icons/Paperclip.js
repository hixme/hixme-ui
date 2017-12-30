import React from 'react'
import BaseIcon from './BaseIcon'

/*eslint-disable */
export default class Paperclip extends BaseIcon {
  static defaultProps = {
    width: 6,
    height: 14,
    viewBox: '0 0 6 14'
  }
  render () {
    const svgColor = this.props.fill !== 'inherit' ? this.props.fill : '#000'
    return (
      <svg {...this.getSvgProps()}>
        <g fill="none" fillRule="evenodd">
          <path d="M-3 0H8.33v13.6H-3"/>
          <path d="M4.8 3.4v6.52c0 1.25-.85 2.26-1.9 2.26-1.04 0-1.9-1-1.9-2.26v-7.1c0-.77.54-1.4 1.2-1.4.65 0 1.17.63 1.17 1.4V8.8c0 .32-.2.57-.47.57-.26 0-.47-.25-.47-.57V3.4h-.7v5.38c0 .8.52 1.42 1.17 1.42.65 0 1.18-.63 1.18-1.42V2.83c0-1.25-.84-2.26-1.9-2.26C1.15.57.3 1.57.3 2.83v7.1c0 1.7 1.18 3.1 2.6 3.1 1.45 0 2.6-1.4 2.6-3.1V3.4h-.7z" fill={svgColor}/>
        </g>
      </svg>
    )
  }
}
/*eslint-enable */
