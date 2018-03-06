import React from 'react'
import BaseIcon from './BaseIcon'

/*eslint-disable */
export default class Graph extends BaseIcon {
  static defaultProps = {
    width: 33,
    height: 32,
    viewBox: '0 0 33 32'
  }
  render () {
    return (
      <svg {...this.getSvgProps()}>
        <g {...this.getPathProps()}>
          <path d='M31.48 31.54H1.22a.64.64 0 0 1-.64-.64V.64C.58.29.87 0 1.22 0h.24c.36 0 .64.29.64.64v29.38h29.38c.36 0 .64.29.64.64v.24c0 .36-.28.64-.64.64z' />
          <path d='M31.16 24.78H1.78v-.32h29.38v.32zm0-6.13H1.78v.32h29.38v-.32zm0-5.81H1.78v.32h29.38v-.32zm0-5.81H1.78v.32h29.38v-.32z' />
          <path d='M8.17 27.15l-2.56-2.56 2.56-2.55 2.55 2.55-2.55 2.56zm10.22-8.5l-2.56-2.55-2.55 2.55 2.55 2.56 2.56-2.56zm9.2-5.62l-2.56-2.55-2.55 2.55 2.55 2.56 2.56-2.56zm-9.2-5.81l-2.56-2.56-2.55 2.56 2.55 2.55 2.56-2.55z' />
        </g>
      </svg>
    )
  }
}
/*eslint-enable */

