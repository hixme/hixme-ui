import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

import { TextBase } from '@hixme-ui/text'

const Time = TextBase.withComponent('time')

class FormatDate extends Component {
  static format(props) {
    const {
      date,
      datetime,
      format,
      inputFormat,
    } = props

    let formatStr = format

    if (!formatStr) {
      formatStr = date ? 'MM/DD/YYYY' : 'MM/DD/YYYY h:mm:ss a'
    }

    return moment(date || datetime, inputFormat, true).format(formatStr)
  }

  static isValid(props) {
    const { date, inputFormat } = props
    if (!date || !inputFormat) { return false }

    return moment(date, inputFormat, true).isValid()
  }

  render() {
    const { datetime, date, format, inputFormat, ...rest } = this.props
    return (
      <Time {...rest}>{FormatDate.format(this.props)}</Time>
    )
  }
}

FormatDate.propTypes = {
  datetime: PropTypes.string,
  date: PropTypes.string,
  format: PropTypes.string,
  inputFormat: PropTypes.string,
}

FormatDate.defaultProps = {
  datetime: null,
  date: null,
  format: null,
  inputFormat: null,
}

FormatDate.displayName = 'FormatDate'
FormatDate.huiName = 'hui:FormatDate'

export default FormatDate
