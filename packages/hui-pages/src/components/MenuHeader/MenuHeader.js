import React from 'react'
import { Link } from 'react-router-dom'

import Container from '@hixme-ui/container'
import Title from '@hixme-ui/title'

const MenuHeader = () => (
  <Container flex justifySpaceBetween alignCenter noPadding width='100%'>
    <Link to='/'>
      <Title
        smaller
        cursor='pointer'
        secondary
        style={{ marginLeft: '20px' }}
      >
        Home
      </Title>
    </Link>
    <a className='github-button' href='https://github.com/hixme/hixme-ui' data-size='large' aria-label='Star hixme/hixme-ui on GitHub'>Star</a>
  </Container>
)

MenuHeader.displayName = 'MenuHeader'

export default MenuHeader
