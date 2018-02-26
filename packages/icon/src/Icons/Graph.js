import React from 'react'
import BaseIcon from './BaseIcon'

/*eslint-disable */
export default class Graph extends BaseIcon {
  static defaultProps = {
    width: 40,
    height: 32,
    viewBox: '0 0 40 32'
  }
  render () {
    return (
      <svg {...this.getSvgProps()}>
        <path d='M34.752228 3.690563c0 .100092.041564.166074.052235.260567l-3.995127 3.485417c-.293615-.166772-.617263-.2932-.980581-.2932-.549883 0-1.050027.235826-1.418509.597184l-6.75917-3.637355c-.219006-.94506-.999513-1.67211-1.971575-1.67211-1.041507 0-1.874335.816823-2.013225 1.86752L12.701152 7.61027c-.347054-.277954-.7608-.466922-1.230739-.466922-.56064 0-1.076101.240887-1.449918.618914L5.232728 5.275793c0-.044474.020739-.09135.020739-.13026 0-1.189682-.922323-2.149862-2.065374-2.149862-1.142793 0-2.065202.96018-2.065202 2.149861 0 1.189682.922409 2.160718 2.065202 2.160718.25644 0 .485084-.068597.70934-.151983l5.653639 2.942436c.304544.794975 1.03841 1.357233 1.908928 1.357233.950721 0 1.720729-.679065 1.960905-1.58523l5.194629-3.463677c.315214.20013.668809.347455 1.063967.347455.464604 0 .873358-.194522 1.220413-.466922l7.009672 3.778571c.299123.811645 1.038151 1.389803 1.919169 1.389803 1.062848 0 1.895762-.832508 2.013311-1.911l4.370579-3.82197c.197579.061154.391286.119485.604957.119485 1.142793 0 2.065288-.960197 2.065288-2.149888 0-1.189654-.922495-2.14986-2.065288-2.14986-1.142879 0-2.065374.960206-2.065374 2.14986zm-2.647394 12.126h.073146v14.82095h5.882972V9.616673l-5.956118 6.199891zM1.287638 11.636236v19.001278H9.12136v-14.41924l-7.833722-4.582038zm11.288478 4.679747v14.32153h16.147107V16.391998l-9.054135-4.288839-7.092972 4.212825z' 
          {...this.getPathProps()} />
      </svg>
    )
  }
}
/*eslint-enable */
