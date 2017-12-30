import React from 'react'
import BaseIcon from './BaseIcon'

/*eslint-disable */
export default class X extends BaseIcon {
  static defaultProps = {
    width: 10,
    height: 14,
    viewBox: '8 6 10 14'
  }
  render () {
    return (
      <svg {...this.getSvgProps()}>
        <path d='M12.944 10.98l-2.55-2.55c-.55-.55-1.425-.546-1.967-.003-.547.546-.542 1.422.002 1.966l2.55 2.55-2.55 2.553c-.55.548-.548 1.423-.005 1.966.546.546 1.422.54 1.966-.002l2.55-2.552 2.554 2.552c.548.548 1.423.544 1.966.002.547-.546.54-1.423 0-1.966l-2.553-2.552 2.552-2.55c.546-.55.542-1.425 0-1.967-.546-.547-1.423-.542-1.966.002l-2.552 2.55z'
          {...this.getPathProps()} />
      </svg>
    )
  }
}
/*eslint-enable */
