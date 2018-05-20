import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'

import Toggle from '@hixme-ui/toggle'
// import Title from '@hixme-ui/title'

import { DocsTitle } from '../../components'

const CheckboxDocs = () => (
  <Grid fluid>
    <DocsTitle
      title='Toggle'
      subtitle='A hixme-ui styled toggle component'
    />
    <Row center='xs' style={{ marginBottom: '20px' }}>
      <Col xs={12} sm={8}>
        <Row style={{ margin: '20px 0' }}>
          <Toggle />
        </Row>
      </Col>
    </Row>
  </Grid>
)

export default CheckboxDocs
