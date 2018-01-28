import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

import { TextBase } from '@hixme-ui/text'

const Time = TextBase.withComponent('time')

class FormatUtcDate extends Component {
  static format(props) {
    const {
      date,
      datetime,
      format,
      inputFormat } = props

    const offset = moment().utcOffset()

    let formatStr = format

    if (!formatStr) {
      formatStr = date ? 'MM/DD/YYYY' : 'MM/DD/YYYY h:mm:ss a'
    }

    return moment.utc(date || datetime, inputFormat, true).utcOffset(offset).format(formatStr)
  }

  static isValid(props) {
    const { date, inputFormat } = props
    if (!date || !inputFormat) { return false }

    return moment(date, inputFormat, true).isValid()
  }

  render() {
    const { datetime, date, format, inputFormat, ...rest } = this.props
    return (
      <Time {...rest}>{FormatUtcDate.format(this.props)}</Time>
    )
  }
}

FormatUtcDate.propTypes = {
  datetime: PropTypes.string,
  date: PropTypes.string,
  format: PropTypes.string,
  inputFormat: PropTypes.string,
}

FormatUtcDate.defaultProps = {
  datetime: null,
  date: null,
  format: null,
  inputFormat: null,
}

FormatUtcDate.displayName = 'FormatUtcDate'
FormatUtcDate.huiName = 'hui:FormatUtcDate'

export default FormatUtcDate
