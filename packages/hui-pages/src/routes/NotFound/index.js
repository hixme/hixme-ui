import React from 'react'
import { Link } from 'react-router-dom'

import Container from '@hixme-ui/container'
import Text from '@hixme-ui/text'
import Title from '@hixme-ui/title'

const NotFound = () => (
  <Container flex direction='column' alignCenter>
    <Title jumbo bold primary>404 - Not Found</Title>
    <Text fontSize='80px'>:(</Text>
    <Text p large thin>
      Perhaps head back to the <Link to='/'><Text primary bold cursor='pointer'>home page</Text></Link>?
    </Text>
  </Container>
)

export default NotFound
