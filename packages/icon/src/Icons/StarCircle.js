import React from 'react'
import BaseIcon from './BaseIcon'

/*eslint-disable */
export default class StarCircle extends BaseIcon {
  static defaultProps = {
    width: 18,
    height: 18,
    viewBox: '14 10 18 18'
  }
  render () {
    return (
      <svg {...this.getSvgProps()}>
        <path d='M23 28c4.9705627 0 9-4.0294373 9-9 0-4.97056275-4.0294373-9-9-9-4.97056275 0-9 4.02943725-9 9 0 4.9705627 4.02943725 9 9 9zm0-6l-3.5267115 1.854102.67354195-3.92705102-2.85316955-2.78115295 3.94298334-.572949L23 13l1.7633558 3.57294902 3.9429833.572949-2.8531696 2.78115296.673542 3.92705102L23 22z'
          {...this.getPathProps()} />
      </svg>
    )
  }
}
/*eslint-enable */
