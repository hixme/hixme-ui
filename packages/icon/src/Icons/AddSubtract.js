/* eslint-disable max-len */
import React from 'react'
import BaseIcon from './BaseIcon'

class AddSubtract extends BaseIcon {
  static defaultProps = {
    width: 24,
    height: 24,
    viewBox: '0 0 24 24',
  }

  render() {
    return (
      <svg {...this.getSvgProps()}>
        <path
          d='M15 17v2h2v-2h2v-2h-2v-2h-2v2h-2v2h2zm5-15H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM5 6h6v2H5V6zm15 14H4L20 4v16z'
          {...this.getPathProps()}
        />
      </svg>
    )
  }
}

export default AddSubtract
