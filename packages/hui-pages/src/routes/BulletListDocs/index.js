import React from 'react'
import { Grid, Row } from 'react-flexbox-grid'

import BulletList from '@hixme-ui/bullet-list'

import { Code, DocsTitle } from '../../components'

const BulletListDocs = () => {
  const myUnorderedList = [
    'HTML',
    'JavaScript',
    'CSS',
  ]

  return (
    <div>
      <DocsTitle title='BulletList' subtitle='A styled unordered list' />
      <Grid fluid>
        <Row center='xs' style={{ marginBottom: '30px' }}>
          <BulletList bulletArray={myUnorderedList} />
        </Row>
        <Row center='xs' style={{ marginBottom: '30px' }}>
          <BulletList primary bulletArray={myUnorderedList} />
        </Row>
        <Row center='xs' style={{ marginBottom: '30px' }}>
          <BulletList blue bulletArray={myUnorderedList} />
        </Row>
        <Row center='xs'>
          <Code>
            {`const myUnorderedList = [
  'HTML',
  'JavaScript',
  'CSS',
]

<BulletList blue bulletArray={myUnorderedList} />`}
          </Code>
        </Row>
      </Grid>
    </div>
  )
}

export default BulletListDocs
