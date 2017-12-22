import React from 'react'

import Container from '@hixme-ui/container'
import Title from '@hixme-ui/title'
import Text from '@hixme-ui/text'

const ContainerDocs = () => (
  <div>
    <Title>Container</Title>
    <br />
    <Container border='1px solid red' muted rounded>
      <Text>I am in a container</Text>
    </Container>
  </div>
)

export default ContainerDocs


