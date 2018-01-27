import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

import Text from '@hixme-ui/text'

class FormatDate extends Text {
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
    return (
      <time style={this.getStyles()}>{FormatDate.format(this.props)}</time>
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
