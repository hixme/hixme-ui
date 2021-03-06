import React from 'react'
import BaseIcon from './BaseIcon'

/*eslint-disable */
export default class Pdf extends BaseIcon {
  static defaultProps = {
    width: 31,
    height: 36,
    viewBox: '0 0 31 36'
  }
  render () {
    return (
      <svg {...this.getSvgProps()}>
        <path d='M3.25 2c-.138 0-.25.113-.25.25V18h26v-8h-7.75c-.138 0-.25-.113-.25-.25V2H3.25zM22 2v7h7l-7-7zM7.75 21.188V27h1.5v-1.905h.938c.424 0 .78-.04 1.063-.156.29-.12.52-.31.75-.54.17-.17.32-.38.41-.63.09-.25.13-.49.13-.75 0-.337-.06-.636-.19-.876-.12-.24-.29-.44-.53-.594-.19-.127-.4-.22-.65-.28-.253-.065-.57-.094-.94-.094H7.75zm5.844 0V27h2.063c.464 0 .85-.025 1.188-.093.34-.068.654-.203.938-.375.378-.23.69-.542.938-.97.25-.43.38-.926.38-1.468 0-.562-.11-1.055-.34-1.47-.23-.416-.53-.754-.94-1-.23-.145-.53-.233-.87-.312-.342-.08-.743-.125-1.22-.125H13.6zm6.656 0V27h1.5v-2.5h2.47v-1.124h-2.47v-1.063h2.656v-1.125H20.25zm-11 1.094h.25c.247 0 .445-.008.594 0 .148.005.312.03.47.094.116.047.223.13.312.25.09.117.125.273.125.438 0 .167-.01.29-.06.406-.04.115-.12.23-.22.313-.11.094-.24.156-.4.188-.16.04-.37.04-.62.04h-.44v-1.72zm5.844 0h.375c.32 0 .56.003.71.03.16.027.34.082.5.157.3.15.52.35.65.62.14.27.22.61.22 1s-.09.7-.22.97c-.128.26-.32.47-.594.62-.16.08-.334.15-.5.19-.168.03-.425.03-.78.03h-.377v-3.62zM3 30.002v3.75c0 .138.112.25.25.25h25.5c.138 0 .25-.112.25-.25v-3.75H3z'
          {...this.getPathProps()} />
      </svg>
    )
  }
}
/*eslint-enable */
