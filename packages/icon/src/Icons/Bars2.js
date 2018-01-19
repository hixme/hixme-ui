import React from 'react'
import BaseIcon from './BaseIcon'

/*eslint-disable */
export default class Bars2 extends BaseIcon {
  static defaultProps = {
    width: 20,
    height: 10,
    viewBox: '2 11 20 10'
  }
  render () {
    return (
      <svg {...this.getSvgProps()}>
        <path d='M2 13.8571429h20V11H2v2.8571429zM2 21h20v-2.8571429H2V21z'
          {...this.getPathProps()} />
      </svg>
    )
  }
}
/*eslint-enable */
