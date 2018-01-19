import React from 'react'
import BaseIcon from './BaseIcon'

/*eslint-disable */
export default class Phone extends BaseIcon {
  static defaultProps = {
    width: 15,
    height: 18,
    viewBox: '57 71 15 18'
  }
  render () {
    return (
      <svg {...this.getSvgProps()}>
        <path d='M70.75 76.167c-.833-2.25-2.667-3.834-5-4.25-.833-.167-1.667-.167-2.5 0-2.333.416-4.167 2-5 4.25-.833 2.25-.417 4.75 1.167 6.666L64.5 88.5l5.083-5.75c1.584-1.833 2-4.333 1.167-6.583zm-6.25 5.666c-1.917 0-3.417-1.5-3.417-3.333 0-1.833 1.5-3.333 3.417-3.333 1.917 0 3.417 1.5 3.417 3.333 0 1.833-1.5 3.333-3.417 3.333z'
          {...this.getPathProps()} />
      </svg>
    )
  }
}
/*eslint-enable */
