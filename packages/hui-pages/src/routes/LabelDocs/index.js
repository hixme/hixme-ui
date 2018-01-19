import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'

import Label from '@hixme-ui/label'

import { Code, DocsTitle } from '../../components'

const LabelDocs = () => (
  <Grid fluid>
    <DocsTitle
      title='Label'
      subtitle='An extension of Text component for form labels'
    />
    <Row center='sm' start='xs' middle='xs'>
      <Col xs={12} sm={4}>
        <Label>First name</Label>
      </Col>
      <Col xs={12} sm={8}>
        <Code>
          {'<Label>First name</Label>'}
        </Code>
      </Col>
    </Row>

    <Row center='sm' start='xs' middle='xs'>
      <Col xs={12} sm={4}>
        <Label primary>First name</Label>
      </Col>
      <Col xs={12} sm={8}>
        <Code>
          {'<Label primary thin>First name</Label>'}
        </Code>
      </Col>
    </Row>
  </Grid>
)

export default LabelDocs
