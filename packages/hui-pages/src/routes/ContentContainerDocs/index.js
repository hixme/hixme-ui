import React from 'react'

import Text from '@hixme-ui/text'
import Title from '@hixme-ui/title'

const ContentContainerDocs = () => (
  <div>
    <Title>ContentContainer</Title>
    <Text p>A container component that imposes a max width on its contents</Text>
    {`<ContentContainer>
  <h1>Something very wide</h1>
  <p>
    Lorem ipsum...
  </p>
</ContentContainer>
`}
  </div>
)

export default ContentContainerDocs

