import React from 'react'
import Container from '@hixme-ui/container'

const propTypes = {}

const defaultProps = {
  rounded: true,
  white: true,
  shadow: false,
  heavyShadow: false,
  animate: false,
}

const Card = props => <Container {...props} />

Card.displayName = 'hui:Card'

Card.huiName = 'Card'

Card.propTypes = propTypes

Card.defaultProps = defaultProps

export default Card
