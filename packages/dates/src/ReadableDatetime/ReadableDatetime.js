import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

import { TextBase } from '@hixme-ui/text'

const Time = TextBase.withComponent('time')

class ReadableDatetime extends Component {
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
    const { datetime, format, ...rest } = this.props
    return (
      <Time {...rest}>{this.getTime()}</Time>
    )
  }
}

ReadableDatetime.propTypes = {
  datetime: PropTypes.string.isRequired,
  format: PropTypes.string,
}

ReadableDatetime.defaultProps = {
  format: 'MM/DD/YYYY h:mm:ss a',
}

ReadableDatetime.displayName = 'ReadableDatetime'
ReadableDatetime.huiName = 'hui:ReadableDatetime'

export default ReadableDatetime
