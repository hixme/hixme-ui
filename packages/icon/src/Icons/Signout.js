import React from 'react'
import BaseIcon from './BaseIcon'

/*eslint-disable */
export default class Signout extends BaseIcon {
  static defaultProps = {
    width: 22,
    height: 14,
    viewBox: '1 5 22 14'
  }
  render () {
    return (
      <svg {...this.getSvgProps()}>
        <path d='M1 11.6643033L11.0790137 5v4.00835196s11.6229315.8766327 11.6229315 9.32143894c0 0-1.4703836-3.4659706-7.0933425-4.1229271-.9200822-.1074696-2.3175342-.2128669-4.5329041-.2128669v4.3346098L1 11.6643033z'
          {...this.getPathProps()} />
      </svg>
    )
  }
}
/*eslint-enable */
