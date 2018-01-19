import React from 'react'
import BaseIcon from './BaseIcon'

/*eslint-disable */
class ArrowDown extends BaseIcon {
  static defaultProps = {
    width: 14,
    height: 9,
    viewBox: '0 -1 14 9'
  }
  render () {
    return (
      <svg {...this.getSvgProps()}>
        <path d='M.4505905 0h12.6165341L6.75885757 7.56363636'
          {...this.getPathProps()} />
      </svg>
    )
  }
}
/*eslint-enable */

export default ArrowDown
