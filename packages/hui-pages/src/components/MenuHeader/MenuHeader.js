import React from 'react'

import Container from '@hixme-ui/container'

const MenuHeader = () => (
  <Container flex justifyEnd alignCenter noPadding width='100%'>
    <a className='github-button' href='https://github.com/hixme/hixme-ui' data-size='large' aria-label='Star hixme/hixme-ui on GitHub'>Star</a>
  </Container>
)

MenuHeader.displayName = 'MenuHeader'

export default MenuHeader
