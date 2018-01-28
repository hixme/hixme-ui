import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'

import Print from '@hixme-ui/print'
import Table from '@hixme-ui/table'
import Title from '@hixme-ui/title'

import { Code, DocsTitle } from '../../components'

const PriceDocs = () => (
  <div>
    <DocsTitle
      title='Print'
      subtitle='A Hixme UI styled print component'
    />
    <Grid fluid>
      <Row style={{ margin: '40px 0 20px 0' }}><Title smaller>Examples</Title></Row>
      <Row center='xs' style={{ marginBottom: '40px' }}>
        <Print />
      </Row>
      <Row center='xs'>
        <Code>
          {'<Print />'}
        </Code>
      </Row>
      <Row center='xs' style={{ marginBottom: '40px' }}>
        <Print label='Print it' />
      </Row>
      <Row center='xs'>
        <Code>
          {'<Print label=\'Print it\' />'}
        </Code>
      </Row>
      <Row style={{ margin: '40px 0 20px 0' }}><Title smaller>Props</Title></Row>
      <Row center='xs'>
        <Col xs={12}>
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
                <td>label</td>
                <td>string</td>
                <td>&quote;Print&quote;</td>
                <td>Button label text</td>
              </tr>
              <tr>
                <td>showLabel</td>
                <td>bool</td>
                <td>true</td>
                <td>Show and hide button text</td>
              </tr>
              <tr>
                <td>showIcon</td>
                <td>bool</td>
                <td>true</td>
                <td>Show and hide button icon</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Grid>
  </div>
)

export default PriceDocs

