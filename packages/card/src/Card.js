import React from 'react'
import Container from '@hixme-ui/container'

const Card = props => <Container {...props} />

Card.displayName = 'hui:Card'
Card.huiName = 'Card'

Card.defaultProps = {
  rounded: true,
  shadow: true,
  white: true,
}

export default Card
