import React from 'react'
import PropTypes from 'prop-types'
import Text from '@hixme-ui/text'

const SocialSecurity = ({
  number,
  ...props
}) => <Text {...props}>{number}</Text>

SocialSecurity.format = function formatSocialSecurityNumber(number) {
  return number
}

SocialSecurity.displayName = 'hui:SocialSecurity'
SocialSecurity.huiName = 'SocialSecurity'

SocialSecurity.propTypes = {
  number: PropTypes.string.isRequired,
}

export default SocialSecurity
