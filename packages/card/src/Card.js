import React from 'react'
import Container from '@hixme-ui/container'

const Card = props => <Container {...props} />

Card.displayName = 'hui:Card'
Card.huiName = 'Card'

Card.propTypes = {}
Card.defaultProps = {
  rounded: true,
  white: true,
  shadow: true,
}

export default Card
