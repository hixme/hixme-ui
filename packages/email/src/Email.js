import React from 'react'
import PropTypes from 'prop-types'
import Text from '@hixme-ui/text'

const Email = ({
  children,
  address,
  ...props
}) => (
  <Text href={`mailto:${address}`} {...props}>
    {children || address}
  </Text>
)

Email.propTypes = {
  a: PropTypes.bool,
  address: PropTypes.string.isRequired,
  children: PropTypes.node,
  wordBreak: PropTypes.bool,
}

Email.defaultProps = {
  a: true,
  children: null,
  wordBreak: true,
}

Email.displayName = 'Email'
Email.huiName = 'hui:Email'

export default Email
