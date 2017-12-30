import React from 'react'
import BaseIcon from './BaseIcon'

/*eslint-disable */
export default class CurveArrowRight extends BaseIcon {
  static defaultProps = {
    width: 16,
    height: 11,
    viewBox: '-1 0 16 11'
  }
  render () {
    return (
      <svg {...this.getSvgProps()}>
        <path d='M10.15 0l4.83 4.83-4.83 4.83-1.487-1.485L11.01 5.83H4.22c-.336 0-.647.02-.933.066-.285.045-.532.122-.74.227-.207.107-.367.258-.48.455-.11.196-.167.445-.167.748 0 .37.116.69.345.958.23.27.54.455.933.555l-.555 1.95c-.785-.213-1.418-.608-1.9-1.186C.24 9.028 0 8.254 0 7.292c0-.74.134-1.345.403-1.816.27-.47.61-.835 1.027-1.093.414-.258.863-.434 1.344-.53.483-.095.943-.142 1.38-.142h6.733L8.662 1.488 10.15 0z'
          {...this.getPathProps()} />
      </svg>
    )
  }
}
/*eslint-enable */
