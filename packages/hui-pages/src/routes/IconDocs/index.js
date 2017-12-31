import React from 'react'
import { Grid, Row } from 'react-flexbox-grid'

import Icon from '@hixme-ui/icon'
// import Table from '@hixme-ui/table'
// import Title from '@hixme-ui/title'

import { Code, DocsTitle } from '../../components'

const IconDocs = () => (
  <div>
    <DocsTitle
      title='Icon'
      subtitle='A Hixme UI styled icon component'
    />
    <Grid fluid>
      <Row center='xs' style={{ marginBottom: '30px' }}>
        <Icon menu size={3} primary />
      </Row>
      <Row center='xs'>
        <Code>
          {'<Icon menu size={3} />'}
        </Code>
      </Row>
    </Grid>
  </div>
)

export default IconDocs
