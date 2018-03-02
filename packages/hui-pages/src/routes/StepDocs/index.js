import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'

import Step from '@hixme-ui/step'

import { Code, DocsTitle } from '../../components'

const StepDocs = () => (
  <Grid fluid>
    <DocsTitle
      title='Step'
      subtitle='A component to illustrate a flow or process with steps'
    />
    <Row center='sm' start='xs' middle='xs'>
      <Col xs={12} sm={4}>
        <Step>1</Step>
      </Col>
      <Col xs={12} sm={8}>
        <Code>
          {'<Step>1</Step>'}
        </Code>
      </Col>
    </Row>
    <Row center='sm' start='xs' middle='xs'>
      <Col xs={12} sm={4}>
        <Step completed>1</Step>
      </Col>
      <Col xs={12} sm={8}>
        <Code>
          {'<Step completed>1</Step>'}
        </Code>
      </Col>
    </Row>
  </Grid>
)

export default StepDocs
