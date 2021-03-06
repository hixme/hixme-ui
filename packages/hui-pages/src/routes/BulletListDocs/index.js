import React from 'react'
import { Grid, Row } from 'react-flexbox-grid'

import BulletList from '@hixme-ui/bullet-list'

import { Code, DocsTitle } from '../../components'

const BulletListDocs = () => {
  const myUnorderedList = [
    'One fish',
    'Two fish',
    'Red fish',
    'Blue fish',
  ]

  return (
    <div>
      <DocsTitle title='BulletList' subtitle='A styled unordered list' />
      <Grid fluid>
        <Row center='xs' style={{ marginBottom: '30px' }}>
          <BulletList bulletArray={myUnorderedList} />
        </Row>
        <Row center='xs'>
          <Code>
            {`const myUnorderedList = [
  'One fish',
  'Two fish',
  'Red fish',
  'Blue fish',
]

<BulletList bulletArray={myUnorderedList} />`}
          </Code>
        </Row>
      </Grid>
    </div>
  )
}

export default BulletListDocs

