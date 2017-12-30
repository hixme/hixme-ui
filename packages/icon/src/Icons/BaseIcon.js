import { Component } from 'react'
import PropTypes from 'prop-types'

export default class BaseIcon extends Component {
  static huiName = 'BaseIcon'
  static propTypes = {
    color: PropTypes.string,
    fillRule: PropTypes.string,
    height: PropTypes.number,
    raw: PropTypes.bool,
    style: PropTypes.object,
    viewBox: PropTypes.string,
    width: PropTypes.number,
  }
  static defaultProps = {
    color: '#000', // color is used for fill and stroke properties
    fillRule: 'evenodd',
    height: null,
    raw: false,
    style: {},
    viewBox: null,
    width: null,
  }

  getStrokeColor() {
    return (this.props.color === 'inherit') ? BaseIcon.defaultProps.color : this.props.color
  }

  getSvgProps() {
    const { height, width, style, viewBox } = this.props

    if (this.props.raw) {
      return {
        width,
        height,
        style,
        viewBox,
      }
    }

    return {
      style,
      viewBox,
    }
  }

  getPathProps() {
    const { fillRule, color } = this.props
    return {
      fillRule,
      fill: color,
    }
  }
}
