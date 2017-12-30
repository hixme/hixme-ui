import React from 'react'
import BaseIcon from './BaseIcon'

/*eslint-disable */
export default class Document extends BaseIcon {
  static defaultProps = {
    width: 22,
    height: 17,
    viewBox: '0 0 22 17'
  }
  render () {
    return (
      <svg {...this.getSvgProps()}>
        <path  d='M10.08 8h-6.4v1.38h6.4V8zm0-2.3h-6.4v1.4h6.4V5.7zm0 4.6h-6.4v1.37h6.4V10.3zM19.25.66c1 0 1.83.82 1.83 1.83v11.9c0 1-.82 1.83-1.83 1.83H2.75c-1 0-1.83-.82-1.83-1.83V2.5c0-1 .82-1.83 1.83-1.83h16.5zM11 14.42V2.5H2.75v11.92H11z'
          {...this.getPathProps()} />
      </svg>
    )
  }
}
/*eslint-enable */
