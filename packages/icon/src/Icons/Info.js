import React from 'react'
import BaseIcon from './BaseIcon'

/*eslint-disable */
export default class Info extends BaseIcon {
  static defaultProps = {
    width: 36,
    height: 36,
    viewBox: '0 -2 36 36'
  }
  render () {
    return (
      <svg {...this.getSvgProps()}>
        <path d='M21.4906931 26.934253c0 .4162475-.3378119.5889406-.7540594.5889406h-7.5405941c-.4162475 0-.7540594-.1726931-.7540594-.5889406v-.3770297c0-.4165842.3378119-.9191783.7540594-.9191783h.7540594v-9.4257425h-.7540594c-.4162475 0-.7540594-.1726931-.7540594-.5889406v-.3770297c0-.4165842.3378119-.9191782.7540594-.9191782h6.0324753c.4162475 0 .7540594.502594.7540594.9191782V25.638045h.7540594c.4162475 0 .7540594.5025941.7540594.9191783v.3770297zM16.9663366 6.2444114c1.6657476 0 3.0162377 1.3504901 3.0162377 3.0162376 0 1.6656634-1.3504901 3.0162376-3.0162377 3.0162376-1.6657475 0-3.0162376-1.3505742-3.0162376-3.0162376 0-1.6657475 1.3504901-3.0162376 3.0162376-3.0162376zm0-6.24438615C7.59605446.00002525 0 7.59599555 0 16.9663619c0 9.3702822 7.59605446 16.9663366 16.9663366 16.9663366 9.3702822 0 16.9663367-7.5960544 16.9663367-16.9663366 0-9.37036636-7.5960545-16.96633665-16.9663367-16.96633665z'
          {...this.getPathProps()} />
      </svg>
    )
  }
}
/*eslint-enable */
