import React from 'react'
import BaseIcon from './BaseIcon'

/*eslint-disable */
export default class Printer extends BaseIcon {
  static defaultProps = {
    width: 16,
    height: 18,
    viewBox: '0 0 16 18'
 }
  render () {
    const { color } = this.props
    return (
      <svg {...this.getSvgProps()}>
        <g>
          <path d='M0 1h16v17H0V1zm1.5 15.6h13v-13h-13v13zM3 6.6h1.4V5H3v1.6zm0 2.8h1.4V8H3v1.4zm0 3h1.4V11H3v1zM3 15h1.4v-1.3H3V15zm2.8-8.4H13V5H6v1.6zm0 2.8H13V8H6v1.4zm0 3H13V11H6v1zm0 1.3H13V15H6v-1.3z'
            fillRule='evenodd' {...this.getPathProps()} />
        </g>
      </svg>
    )
  }
}
/*eslint-enable */
