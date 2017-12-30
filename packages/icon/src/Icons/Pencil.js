import React from 'react'
import BaseIcon from './BaseIcon'

/*eslint-disable */
export default class Pencil extends BaseIcon {
  static defaultProps = {
    width: 18,
    height: 18,
    viewBox: '3 3 18 18'
  }
  render () {
    return (
      <svg {...this.getSvgProps()}>
        <path d='M3 17.24985v3.75h3.75l5.576-5.576 5.4736-5.4736-3.75-3.75M20.7 7.04985c.3998-.3998.3998-1 0-1.4l-2.35-2.35c-.4-.3998-1.0002-.3998-1.4 0l-1.85 1.8502 3.7498 3.7498 1.8502-1.85z'
          {...this.getPathProps()} />
      </svg>
    )
  }
}
/*eslint-enable */
