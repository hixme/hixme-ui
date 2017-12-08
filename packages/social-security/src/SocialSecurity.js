import React from 'react'
import PropTypes from 'prop-types'
import Text from '@hixme-ui/text'

const SocialSecurity = ({
  number,
  ...props
}) => <Text {...props}>{SocialSecurity.format(number)}</Text>

SocialSecurity.format = function formatSocialSecurityNumber(number, { showFull = false } = {}) {
  return showFull ?
    number.replace(/(\d{3})(\d{2})(\d{4})/, '$1-$2-$3') :
    `***-**-${number.slice(-4)}`
}

SocialSecurity.displayName = 'hui:SocialSecurity'
SocialSecurity.huiName = 'SocialSecurity'

SocialSecurity.propTypes = {
  number: PropTypes.string.isRequired,
}

export default SocialSecurity
