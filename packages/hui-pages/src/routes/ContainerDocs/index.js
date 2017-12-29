import React from 'react'

import Container from '@hixme-ui/container'
import Text from '@hixme-ui/text'

import { Code, DocsTitle } from '../../components'

const ContainerDocs = () => (
  <div>
    <DocsTitle title='Container' subtitle='A container component offering layout and styling options' />
    <Container border='1px solid red' muted rounded margin='0 0 30px 0'>
      <Text>I am in a container</Text>
    </Container>
    <Code>
      {`<Container border='1px solid red' muted rounded margin='0 0 30px 0'>
  <Text>I am in a container</Text>
</Container>`}
    </Code>
  </div>
)

export default ContainerDocs

