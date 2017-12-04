import React from 'react'
import PropTypes from 'prop-types'
import { TextBase } from '@hixme-ui/text'

const Phone = ({
 children,
}) => children

Phone.displayName = 'hui:Phone'
Phone.huiName = 'Phone'

Phone.propTypes = {
  children: PropTypes.any,
}
Phone.defaultProps = {
  children: null,
}

export default Phone
