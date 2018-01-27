import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

import Text from '@hixme-ui/text'

class ReadableDatetime extends Text {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTimezoneOffset
  // The time-zone offset is the difference, in minutes, between UTC and local time.
  // Note that this means that the offset is positive if the local timezone is behind
  // UTC and negative if it is ahead.
  getTime() {
    const { datetime, format } = this.props

    const offset = -(new Date().getTimezoneOffset())
    return moment.utc(datetime).utcOffset(offset).format(format)
  }

  render() {
    return (
      <time style={this.getStyles()}>{this.getTime()}</time>
    )
  }
}

ReadableDatetime.propTypes = {
  datetime: PropTypes.string,
  format: PropTypes.string,
}

ReadableDatetime.defaultProps = {
  format: 'MM/DD/YYYY h:mm:ss a',
}

ReadableDatetime.displayName = 'ReadableDatetime'
ReadableDatetime.huiName = 'hui:ReadableDatetime'

export default ReadableDatetime
