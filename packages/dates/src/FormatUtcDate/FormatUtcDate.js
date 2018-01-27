import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

import Text from '@hixme-ui/text'

class FormatUtcDate extends Text {
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
    return (
      <time style={this.getStyles()}>{FormatUtcDate.format(this.props)}</time>
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
