import React from 'react'
import BaseIcon from './BaseIcon'

/*eslint-disable */
export default class Plus extends BaseIcon {
  static defaultProps = {
    width: 19,
    height: 19,
    viewBox: '3 3 19 19'
  }
  render () {
    return (
      <svg {...this.getSvgProps()}>
        <path d='M9.719 18.7734c0 1.4013 1.1497 2.551 2.551 2.551 1.4013 0 2.551-1.1497 2.551-2.551v-4.132h4.2398c1.3654 0 2.4792-1.1138 2.4792-2.4792 0-1.3653-1.1138-2.4792-2.4792-2.4792H14.821V5.551C14.821 4.1498 13.6713 3 12.27 3c-1.4013 0-2.551 1.1498-2.551 2.551v4.132H5.4792C4.1138 9.683 3 10.797 3 12.1622c0 1.3654 1.1138 2.4792 2.4792 2.4792H9.719v4.132z'
          {...this.getPathProps()} />
      </svg>
    )
  }
}
/*eslint-enable */
