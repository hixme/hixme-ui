import React from 'react'
import Highlight from 'react-highlight'

import Text from '@hixme-ui/text'
import Title from '@hixme-ui/title'

import DocsTitle from '../../components/DocsTitle'

const ContentContainerDocs = () => (
  <div>
    <DocsTitle
      title='Content Container' 
      subtitle='A container component that imposes a max width on its contents' 
    />
    <Highlight>
      {`<ContentContainer>
  <h1>Something very wide</h1>
  <p>
    Lorem ipsum...
  </p>
</ContentContainer>
`}
  </Highlight>
  </div>
)

export default ContentContainerDocs

