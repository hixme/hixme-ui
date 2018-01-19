import React from 'react'
import BaseIcon from './BaseIcon'

/*eslint-disable */
export default class Ribbon extends BaseIcon {
  static defaultProps = {
    width: 13,
    height: 20,
    viewBox: '6 2 13 20'
  }
  render () {
    return (
      <svg {...this.getSvgProps()}>
        <path d='M8.00854244 2C6.89925508 2 6 2.8949452 6 3.99894135V21.3600006l5.9993969-4.4533888 6.0006762 4.4533888V3.99894135C18.0000731 2.89495653 17.0981173 2 15.9915307 2H8.00854244z'
          {...this.getPathProps()} />
      </svg>
    )
  }
}
/*eslint-enable */
