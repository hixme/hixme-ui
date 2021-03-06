import React from 'react'
import BaseIcon from './BaseIcon'

/*eslint-disable */
export default class Calendar extends BaseIcon {
  static defaultProps = {
    width: 37,
    height: 40,
    viewBox: '0 0 37 40'
  }
  render () {
    const { color } = this.props
    return (
      <svg {...this.getSvgProps()}>
        <defs>
          <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a">
            <stop stopColor="#E6EBED" offset="0%"/>
            <stop stopColor="#DCE2E4" offset="76.68%"/>
            <stop stopColor="#D2DADC" offset="100%"/>
          </linearGradient>
        </defs>
        <g transform="translate(.8 .58)" fill="none">
          <path d="M35.58 1.96a.59.59 0 0 0-.58-.58H.6a.59.59 0 0 0-.58.58v31.02h35.56V1.96zM.02 32.98v5.65c0 .2.27.37.58.37H35c.31 0 .58-.17.58-.37v-5.65H.02z" fill="#607D8A"/>
          <path fill="#E6EBED" d="M1.54 16.05h32.53v21.32H1.54z"/>
          <path fill="url(#a)" d="M16.14 13.15H32.7v21.32H16.14z" transform="translate(1.34 2.9)"/>
          <path fill="#E6EBED" d="M1.54 3h32.53v7.96H1.54z"/>
          <path fill="#677786" d="M1.54 10.99h32.53v5.06H1.54z"/>
          <circle fill="#999" cx="8.09" cy="7.58" r="1.52"/>
          <circle fill="#999" cx="27.54" cy="7.58" r="1.52"/>
          <path d="M16.22 31.23L8 31.17c.1-.81.38-1.59.86-2.3.48-.72 1.39-1.55 2.72-2.54.8-.6 1.33-1.04 1.54-1.35.23-.31.34-.6.34-.9 0-.3-.11-.56-.32-.77-.22-.21-.5-.33-.83-.33-.35 0-.64.1-.87.33-.23.21-.36.6-.46 1.16l-2.73-.25c.11-.77.3-1.37.6-1.82.28-.42.69-.75 1.2-.98a5.2 5.2 0 0 1 2.18-.33c.96 0 1.71.11 2.25.34.54.24.97.57 1.26 1.03.3.46.46.97.44 1.55 0 .6-.2 1.18-.54 1.72-.35.54-1 1.14-1.93 1.8-.55.39-.92.64-1.11.8-.2.15-.4.34-.66.6l4.28.03v2.27zm5.88-7.03l-2.58-.48c.21-.83.63-1.45 1.25-1.9a4.25 4.25 0 0 1 2.6-.64c1.29 0 2.21.25 2.8.74.57.48.84 1.1.84 1.82 0 .42-.12.81-.37 1.16a3 3 0 0 1-1.06.9c.39.1.68.22.87.34.33.21.58.46.75.81.17.33.27.74.27 1.18a3.3 3.3 0 0 1-.46 1.67 3.1 3.1 0 0 1-1.31 1.22c-.56.29-1.31.42-2.23.4-.9 0-1.6-.11-2.12-.33a2.99 2.99 0 0 1-1.27-.94 4.3 4.3 0 0 1-.75-1.55l2.73-.35c.1.56.27.95.5 1.16.23.21.52.33.87.33.36 0 .67-.14.92-.4.25-.28.37-.63.37-1.1 0-.46-.12-.8-.35-1.06a1.26 1.26 0 0 0-.96-.38c-.21 0-.52.05-.89.15l.16-1.97.36.04c.37 0 .66-.12.9-.33.26-.24.37-.5.37-.82 0-.3-.07-.54-.27-.71a1 1 0 0 0-.73-.27c-.33 0-.58.1-.79.29-.2.19-.34.54-.42 1.02z" stroke="#607D8A" fill="#FFF"/>
          <path d="M9.06 11.87h1.3l.5 1.95.5-1.95h1.31v3.22h-.81v-2.45l-.62 2.45h-.73l-.62-2.45v2.45h-.81v-3.22zm4.07 2.05c0-.35.12-.64.35-.87.25-.23.56-.35.98-.35.45 0 .8.12 1.06.41.18.21.29.48.29.81 0 .36-.13.65-.36.88-.22.22-.56.35-.97.35-.38 0-.69-.1-.92-.3a1.12 1.12 0 0 1-.43-.93zm.9 0c0 .21.03.36.12.46.08.1.18.15.3.15a.4.4 0 0 0 .32-.15c.08-.1.12-.25.12-.48 0-.2-.04-.35-.12-.45a.37.37 0 0 0-.31-.15.44.44 0 0 0-.33.15.91.91 0 0 0-.1.47zm2.21-1.16h.84v.37c.12-.14.24-.27.37-.33.12-.06.29-.1.46-.1.25 0 .43.08.58.23.14.14.2.37.2.68v1.48h-.89v-1.3c0-.14-.02-.24-.08-.3s-.13-.09-.23-.09-.19.05-.27.13c-.06.08-.1.23-.1.44v1.12h-.9v-2.33h.02zm5.45-.89v3.22h-.83v-.36c-.13.15-.23.25-.32.3a.97.97 0 0 1-.43.1.86.86 0 0 1-.73-.35 1.54 1.54 0 0 1-.25-.88c0-.4.09-.68.27-.89a.9.9 0 0 1 .7-.31 1 1 0 0 1 .38.06c.1.04.21.13.31.2v-1.11h.9v.02zm-.9 2.05a.62.62 0 0 0-.12-.41c-.08-.08-.17-.15-.3-.15-.1 0-.18.04-.26.13-.06.08-.1.23-.1.43 0 .2.04.34.1.42.06.08.16.12.27.12.1 0 .2-.04.29-.12.08-.08.12-.23.12-.42zm2.25-.42l-.85-.07c.04-.15.08-.27.14-.36a.75.75 0 0 1 .27-.23c.08-.04.19-.08.33-.1a3.11 3.11 0 0 1 1.1 0c.17.02.3.08.42.19a.6.6 0 0 1 .19.27c.04.12.06.23.06.35v1.02c0 .1 0 .18.02.25l.08.23h-.83c-.04-.07-.06-.1-.06-.15l-.02-.15c-.12.1-.23.2-.35.25-.17.07-.34.1-.54.1-.27 0-.5-.05-.63-.18a.6.6 0 0 1-.2-.48c0-.18.04-.33.14-.43.1-.1.3-.21.58-.25.34-.06.56-.13.65-.15.1-.02.2-.06.3-.1 0-.1-.01-.19-.05-.23-.05-.04-.13-.06-.25-.06a.73.73 0 0 0-.34.06.47.47 0 0 0-.16.23zm.77.49l-.38.12a.83.83 0 0 0-.35.15c-.04.04-.08.1-.08.16s.02.13.08.17c.04.04.12.06.2.06a.6.6 0 0 0 .28-.06.5.5 0 0 0 .18-.17.52.52 0 0 0 .07-.27V14zm1.16-1.23h.94l.47 1.56.44-1.56h.87l-.91 2.5c-.1.28-.21.47-.33.58-.15.14-.4.2-.71.2-.13 0-.33-.02-.6-.06l-.07-.62c.13.04.27.06.44.06.1 0 .19-.02.25-.06a.47.47 0 0 0 .17-.25l-.96-2.35z" fill="#F1F1F1"/>
          <path fill="#607D8A" d="M9.67 1.38h17.85v1.65H9.67z"/>
          <path fill="#3A4951" d="M8.1 1.38h1.57v1.65H8.1z"/>
          <path d="M8.09 6.06a1.52 1.52 0 0 1 1.42 2.05.84.84 0 0 0 .16-.47V3.03H8.09v3.03zM29.1 3h-1.58v3.04a1.52 1.52 0 0 1 1.42 2.05.84.84 0 0 0 .16-.47V3.01z" fill="#E5E5E5"/>
          <path fill="#3A4951" d="M27.52 1.38h1.58v1.65h-1.58z"/>
          <path d="M8.89 7.62c0 .45-.36.78-.78.78a.77.77 0 0 1-.78-.78V.89a.78.78 0 0 1 1.56 0v6.73zm19.43 0c0 .45-.36.78-.78.78a.77.77 0 0 1-.78-.78V.89a.78.78 0 0 1 1.56 0v6.73z" fill="#677786"/>
        </g>
      </svg>
    )
  }
}
/*eslint-enable */
