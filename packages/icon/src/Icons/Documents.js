import React from 'react'
import BaseIcon from './BaseIcon'

/*eslint-disable */
export default class Documents extends BaseIcon {
  static defaultProps = {
    width: 36,
    height: 35,
    viewBox: '0 0 36 35'
  }
  render () {
    return (
      <svg {...this.getSvgProps()}>
        <path d='M12.35 4.49h5.4a.54.54 0 0 0 0-1.08h-5.4a.54.54 0 0 0 0 1.08zm19.96 2.16h-1.62V2.87A2.7 2.7 0 0 0 28 .17H10.75c-1.3 0-2.4.93-2.65 2.16h-.6a2.7 2.7 0 0 0-2.69 2.7v.54H3.18a2.7 2.7 0 0 0-2.7 2.7V32a2.7 2.7 0 0 0 2.7 2.7h29.13a2.7 2.7 0 0 0 2.7-2.7V9.34a2.7 2.7 0 0 0-2.7-2.7zM9.11 2.87c0-.9.73-1.62 1.63-1.62H28c.89 0 1.61.73 1.61 1.62v9.17h-8.09a6.25 6.25 0 0 1-3.44-1.27l-1.03-.89h9.33a.54.54 0 1 0 0-1.08h-10.6l-.05-.05-.9-.76-.46-.4-.22-.19-.25-.21h12.48a.54.54 0 1 0 0-1.08H12.59a7.23 7.23 0 0 0-2.93-.54h-.54v-2.7zM5.89 5.03c0-.9.73-1.62 1.62-1.62h.54v2.16H5.88v-.54zM33.93 32c0 .89-.73 1.61-1.62 1.61H3.18A1.6 1.6 0 0 1 1.57 32V8.26c0-.89.72-1.61 1.61-1.61h6.48c1.25 0 2.26.27 2.43.4l.63.54.05.05.67.57 1.5 1.29 2.44 2.09c1 .86 2.82 1.53 4.14 1.53h10.79c.9 0 1.62.72 1.62 1.62V32zm0-19.42l-.07-.04-.14-.09a2.63 2.63 0 0 0-.76-.32l-.15-.04a2.74 2.74 0 0 0-.5-.05h-1.62V7.72h1.62c.9 0 1.62.73 1.62 1.62v3.24zm-17.8 11.33l1.4-1.66a.54.54 0 1 1 .83.7l-1.4 1.66a.54.54 0 0 0 .83.7l3.5-4.16a1.63 1.63 0 1 0-2.5-2.1l-4.2 5a2.72 2.72 0 0 0 4.17 3.49l3.49-4.16a.54.54 0 1 1 .83.7l-3.49 4.15a3.8 3.8 0 0 1-5.82-4.88l4.19-5a2.72 2.72 0 1 1 4.16 3.5L18.62 26a1.63 1.63 0 0 1-2.5-2.1z' 
          {...this.getPathProps()} />
      </svg>
    )
  }
}
/*eslint-enable */
