import React from 'react'
import BaseIcon from './BaseIcon'

/*eslint-disable */
export default class Cog extends BaseIcon {
  static defaultProps = {
    width: 20,
    height: 20,
    viewBox: '2 2 20 20'
  }
  render () {
    return (
      <svg {...this.getSvgProps()}>
        <path d='M11.9919444 15.6127778c-1.9944444 0-3.61111107-1.6166667-3.61111107-3.6111111 0-1.9944445 1.61666667-3.61111114 3.61111107-3.61111114 1.9944445 0 3.6111112 1.61666664 3.6111112 3.61111114 0 1.9944444-1.6166667 3.6111111-3.6111112 3.6111111m9.4683334-5.4130556l-2.985-.54999998c-.2897222-.05305555-.3916667-.2961111-.2272222-.54027778l1.7125-2.53888888c.1644444-.24416667.1286111-.6138889-.0794445-.82222223L18.2383333 4.1061111c-.2080555-.20833332-.5780555-.24388888-.8222222-.07916666l-2.5386111 1.7125c-.2441667.16472223-.4875.06222223-.5408333-.22694444l-.5494445-2.9861111C13.7338889 2.23694443 13.4491667 2 13.155 2h-2.3236111c-.2941667 0-.5788889.23694444-.6319445.5263889L9.64972222 5.5122222c-.05333333.28916667-.29666666.39166667-.54083333.22694445L6.57055555 4.02694444c-.24361112-.16472222-.61361112-.12916666-.82194445.07916667l-1.64305554 1.6425c-.20833334.20833334-.24361112.57861112-.07916667.82222223l1.7122222 2.5386111c.16444446.24416668.0625.48722224-.2272222.5402778l-2.985.54999997C2.23666666 10.2530556 2 10.5377778 2 10.8319444v2.3227778c0 .2944445.23666667.5788889.5263889.6325l2.9861111.5494445c.28916667.0536111.3913889.2969444.22666667.5408333L4.0263889 17.4163889c-.16444446.2441667-.12916668.6138889.07916666.8222222l1.64305555 1.6425c.20833334.2083333.57833334.2441667.82194446.0791667l2.53833333-1.7116667c.24416666-.165.4875-.0622222.54083332.2266667l.54972218 2.9852778c.0530556.2894444.3377778.5261111.6319445.5261111H13.155c.2941667 0 .5788889-.2366667.6322222-.5261111L14.3366667 18.475c.0533333-.2891667.2966666-.3916667.5408333-.2266667l2.5386111 1.7119445c.2441667.165.6141667.1291666.8222222-.0791667l1.6425-1.6419444c.2083334-.2086111.2438889-.5783334.0794445-.8225L18.2475 14.8775c-.1647222-.2438889-.0625-.4872222.2266667-.5408333l2.9861111-.5494445c.2897222-.0536111.5263889-.3380555.5263889-.6325v-2.3227778c0-.2941666-.2366667-.5788888-.5263889-.6322222'
          {...this.getPathProps()} />
      </svg>
    )
  }
}
/*eslint-enable */
