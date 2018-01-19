import React from 'react'
import BaseIcon from './BaseIcon'

/*eslint-disable */
export default class Printer extends BaseIcon {
  static defaultProps = {
    width: 23,
    height: 15,
    viewBox: '0 0 23 15'
 }
  render () {
    const { color } = this.props
    return (
      <svg {...this.getSvgProps()}>
        <g>
          <path d='M0 15h23v-3H0v3zM0 0v11.4h23V0H0zm9.8 6.8H7.6V9H5.4V6.8H3V4.6h2.4V2.3h2.2v2.3h2.2v2.2zm7 1.8h-3.3v-1h3.3v1zm3.4-2h-6.7V6h6.7v.7zm0-1.7h-6.7V4h6.7v1z'
            fillRule='evenodd'
            {...this.getPathProps()} />
          />
        </g>
      </svg>
    )
  }
}
/*eslint-enable */
