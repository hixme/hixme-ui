import React from 'react'
import BaseIcon from './BaseIcon'

/*eslint-disable */
export default class Split extends BaseIcon {
  static defaultProps = {
    width: 21,
    height: 19,
    viewBox: '0 0 21 19'
  }
  render () {
    return (
      <svg {...this.getSvgProps()}>
          <path d="M11.02 2.84c-1.2 1.5-2.53 3.53-3.45 6.08-.92-2.55-2.25-4.6-3.45-6.08L5.8 1 0 .45l1.08 5.73L2.53 4.6C4.36 6.9 6.4 10.63 6.4 15.57h2.33c0-4.94 2.05-8.66 3.88-11l1.47 1.6 1.1-5.74-5.8.57L11 2.85z" {...this.getPathProps()} />
      </svg>
    )
  }
}
/*eslint-enable */

