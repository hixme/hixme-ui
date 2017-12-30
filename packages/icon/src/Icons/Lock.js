import React from 'react'
import BaseIcon from './BaseIcon'

/*eslint-disable */
class Lock extends BaseIcon {
  static defaultProps = {
    width: 12,
    height: 15,
    viewBox: '0 0 12 15'
  }
  render () {
    return (
      <svg {...this.getSvgProps()}>
        <path d='M3.21428571,7.28571429 L8.35714286,7.28571429 L8.35714286,5.35714286 C8.35714286,4.64731788 8.1060293,4.04129715 7.60379464,3.5390625 C7.10155999,3.03682785 6.49553926,2.78571429 5.78571429,2.78571429 C5.07588931,2.78571429 4.46986858,3.03682785 3.96763393,3.5390625 C3.46539927,4.04129715 3.21428571,4.64731788 3.21428571,5.35714286 L3.21428571,7.28571429 Z M11.5714286,8.25 L11.5714286,14.0357143 C11.5714286,14.3035728 11.4776795,14.5312491 11.2901786,14.71875 C11.1026776,14.9062509 10.8750013,15 10.6071429,15 L0.964285714,15 C0.696427232,15 0.468750938,14.9062509 0.28125,14.71875 C0.0937490625,14.5312491 0,14.3035728 0,14.0357143 L0,8.25 C0,7.98214152 0.0937490625,7.75446522 0.28125,7.56696429 C0.468750938,7.37946335 0.696427232,7.28571429 0.964285714,7.28571429 L1.28571429,7.28571429 L1.28571429,5.35714286 C1.28571429,4.12499384 1.72767415,3.06696871 2.61160714,2.18303571 C3.49554013,1.29910272 4.55356527,0.857142857 5.78571429,0.857142857 C7.0178633,0.857142857 8.07588844,1.29910272 8.95982143,2.18303571 C9.84375442,3.06696871 10.2857143,4.12499384 10.2857143,5.35714286 L10.2857143,7.28571429 L10.6071429,7.28571429 C10.8750013,7.28571429 11.1026776,7.37946335 11.2901786,7.56696429 C11.4776795,7.75446522 11.5714286,7.98214152 11.5714286,8.25 Z' />
      </svg>
    )
  }
}
/*eslint-enable */

export default Lock
