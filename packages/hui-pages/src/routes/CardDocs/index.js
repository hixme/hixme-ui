import React from 'react'

import Card from '@hixme-ui/card'
import Text from '@hixme-ui/text'

import { Code, DocsTitle } from '../../components'

const CardDocs = () => (
  <div>
    <DocsTitle title='Card' subtitle='A card component offering layout and styling options' />
    <Card>
      <Text>I am in a card.</Text>
    </Card>
    <br />
    <Code>
      {`<Card>
  <Text>I am in a card.</Text>
</Card>`}
    </Code>

    <br />
    <br />
    <Card background='#eee' width='300px'>
      <Text>I am in a fixed width card with a background.</Text>
    </Card>
    <br />
    <Code>
      {`<Card background='#eee' width='300px'>
  <Text>I am in a fixed width card with a background.</Text>
</Card>`}
    </Code>
  </div>
)

export default CardDocs

