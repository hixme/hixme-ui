import React from 'react'
import BaseIcon from './BaseIcon'

/*eslint-disable */
export default class ShieldCross extends BaseIcon {
  static defaultProps = {
    width: 27,
    height: 22,
    viewBox: '0 0 27 22'
  }
  render () {
    return (
      <svg {...this.getSvgProps()}>
        <path d="M26.87 11.89a30.6 30.6 0 0 1-.02-1.18h.02V4.83a2.25 2.25 0 0 0-1.8-2.34l-3.33-.83-.49-.13L18.72.9a3.15 3.15 0 0 0-1.49 0l-2.7.68c-1.06.26-2.39.6-3.65.9a2.29 2.29 0 0 0-1.8 2.37V5.9c0 2.02.02 4.1 0 6.15-.04 2.1.63 4 1.98 5.65a15.33 15.33 0 0 0 5.95 4.29c.29.12.62.2.95.2.34 0 .69-.08 1-.21a15.9 15.9 0 0 0 5.36-3.64 8.66 8.66 0 0 0 2.55-6.45zm-4.05 5.1a14.82 14.82 0 0 1-4.85 3.31 14.1 14.1 0 0 1-5.32-3.85 6.37 6.37 0 0 1-1.52-4.28c.03-2.39.02-4.8.01-7.15v-.67l3.7-.92 3.08-.78h.12l3.06.77c1.21.31 2.46.63 3.7.93v5.23c-.01.8-.02 1.65.01 2.49A6.55 6.55 0 0 1 22.82 17z"
        {...this.getPathProps()}/>
        <path d="M22 9.53h-2.45v-2.4h-3.38v2.4h-2.45v3.31h2.45v2.4h3.38v-2.4H22zM6.8 4.76H1.5a.98.98 0 0 0 0 1.95h5.3V4.76zm-.01 6.82L6.8 10H2.2a.97.97 0 0 0-.97.98c0 .54.43.97.97.97h4.59v-.37zm.46 3.67H3.59a.97.97 0 0 0-.96.98c0 .54.43.97.96.97h4.37c-.3-.63-.53-1.28-.71-1.95z"
        {...this.getPathProps()}/>
      </svg>
    )
  }
}