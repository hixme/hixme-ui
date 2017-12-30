import React from 'react'
import BaseIcon from './BaseIcon'

/*eslint-disable */
export default class XCircle extends BaseIcon {
  static defaultProps = {
    width: 20,
    height: 20,
    viewBox: '0 0 20 20'
  }
  render () {
    const svgColor = this.props.fill !== 'inherit' ? this.props.fill : '#AAB5BD'
    return (
      <svg {...this.getSvgProps()}>
        <path d="M9.76 0C4.38 0 0 4.38 0 9.76c0 5.37 4.38 9.75 9.76 9.75 5.37 0 9.75-4.3 9.75-9.7 0-5.4-4.3-9.8-9.7-9.8zm3.72 12.3c.34.33.34.88 0 1.22-.17.18-.4.26-.6.26-.23 0-.46-.08-.63-.26L9.75 11l-2.5 2.52c-.18.18-.4.26-.63.26-.22 0-.44-.08-.6-.26-.35-.34-.35-.9 0-1.23l2.5-2.6L6 7.22c-.35-.32-.35-.9 0-1.2.33-.3.88-.3 1.22 0l2.5 2.56L12.24 6c.35-.33.9-.33 1.24 0 .34.35.34.9 0 1.24l-2.5 2.53 2.5 2.52z" fill={svgColor}/>
      </svg>
    )
  }
}
/*eslint-enable */
