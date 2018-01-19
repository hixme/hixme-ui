import React from 'react'
import BaseIcon from './BaseIcon'

/*eslint-disable */
export default class CreditCard extends BaseIcon {
  static defaultProps = {
    width: 24,
    height: 16,
    viewBox: '0 0 24 16'
  }
  render () {
    return (
      <svg {...this.getSvgProps()}>
        <g>
          <path d='M22.7 1v13.8H1.3V1h21.4zm0-1H1.3C.7 0 .3.6.3 1v13.8c0 .5.4 1 1 1h21.4c.5 0 1-.5 1-1V1c0-.5-.5-1-1-1z'
            {...this.getPathProps()} />
          <path d='M.3 3.6h23.3v3H.3z'
            {...this.getPathProps()} />
        </g>
      </svg>
    )
  }
}
/*eslint-enable */
