import React from 'react'
import BaseIcon from './BaseIcon'

/*eslint-disable */
export default class Plus extends BaseIcon {
  static defaultProps = {
    width: 21,
    height: 19,
    viewBox: '0 0 21 19'
  }
  render () {
    return (
      <svg {...this.getSvgProps()}>
        <path d='M10.5 15.2L4.3 19 6 12 .5 7.3l7.2-.6L10.5 0l2.8 6.7 7.2.6L15 12l1.7 7'
          {...this.getPathProps()} />
      </svg>
    )
  }
}
/*eslint-enable */
