import React from 'react'

import Card from '@hixme-ui/card'
import Text from '@hixme-ui/text'

import { Code, DocsTitle } from '../../components'

const ContainerDocs = () => (
  <div>
    <DocsTitle title='Card' subtitle='A card component offering layout and styling options' />
    <Card>
      <Text>I am in a card.</Text>
    </Card>
    <Code>
      {`<Card>
      <Text>I am in a card.</Text>
    </Card>`}
    </Code>
  </div>
)

export default ContainerDocs

