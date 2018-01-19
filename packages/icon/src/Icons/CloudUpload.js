import React from 'react'
import BaseIcon from './BaseIcon'

/*eslint-disable */
export default class CloudUpload extends BaseIcon {
  static defaultProps = {
    width: 55,
    height: 42,
    viewBox: '0 0 55 42'
  }
  render () {
    const { color } = this.props

    return (
      <svg {...this.getSvgProps()}>
        <path  d='M42.4 18.6v-.4C42.4 11.6 37 6 30.4 6c-5 0-9 3-11 7-1-.4-2-.7-3-.7-3 0-5.5 2.3-6 5.3-3.7 1.2-6.4 4.8-6.4 9 0 5 4.2 9.4 9.4 9.4H24v-8.3h-5l8.5-8.8 8.4 8.6h-5V36h11.3c4.8 0 8.6-4 8.6-8.7 0-4.8-4-8.7-8.7-8.7z'
          {...this.getPathProps()} />
      </svg>
    )
  }
}
/*eslint-enable */
