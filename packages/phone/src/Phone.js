import React from 'react'
import PropTypes from 'prop-types'
import Text from '@hixme-ui/text'

function getNumbers(str) {
  return str.replace(/[^0-9.]/g, '')
}

const Phone = ({
  number,
  ...props
}) => <Text href={`tel:${getNumbers(number)}`} {...props}>{Phone.format(number)}</Text>

Phone.format = function formatPhoneNumber(str) {
  const number = getNumbers(str)
  return `(${number.substring(0, 3)}) ${number.substring(3, 6)} - ${number.substring(6, 10)}`
}

Phone.displayName = 'hui:Phone'
Phone.huiName = 'Phone'

Phone.propTypes = {
  number: PropTypes.string.isRequired,
}

Phone.defaultProps = {
  a: true,
}

export default Phone
