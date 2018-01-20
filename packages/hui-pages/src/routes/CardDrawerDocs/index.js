import React from 'react'

import CardDrawer from '@hixme-ui/card-drawer'
import Text from '@hixme-ui/text'

import { Code, DocsTitle } from '../../components'

const CardDrawerDocs = () => (
  <div>
    <DocsTitle title='CardDrawer' subtitle='A card accordion component' />
    <CardDrawer>
      <Text>I am in a card.</Text>
    </CardDrawer>
    <br />
    <Code>
      {`<CardDrawer>
  <Text>I am in a card.</Text>
</CardDrawer>`}
    </Code>
  </div>
)

export default CardDrawerDocs

