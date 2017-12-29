import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'

import Price from '@hixme-ui/price'
import Table from '@hixme-ui/table'
import Title from '@hixme-ui/title'

import { Code, DocsTitle } from '../../components'

const PriceDocs = () => (
  <div>
    <DocsTitle
      title='Price'
      subtitle='A Hixme UI styled checkbox component'
    />
    <Grid fluid>
      <Row center='xs' style={{ marginBottom: '40px' }}>
        <Col xs>
          <div />
        </Col>
      </Row>
      <Row center='xs'>
        <Code>
          {'<Price value={46.93} />'}
        </Code>
      </Row>
      <Row style={{ margin: '40px 0 20px 0' }}><Title smaller>Props</Title></Row>
      <Row center='xs'>
        <Table striped>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Default</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>value</td>
              <td>number</td>
              <td>N/A</td>
              <td>Assigns a class to the Price component</td>
            </tr>
          </tbody>
        </Table>
      </Row>
    </Grid>
  </div>
)

export default PriceDocs

