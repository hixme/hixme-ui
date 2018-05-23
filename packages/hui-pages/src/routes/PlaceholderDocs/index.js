import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'

import Placeholder from '@hixme-ui/placeholder'
import Title from '@hixme-ui/title'
import Table from '@hixme-ui/table'

import { Code, DocsTitle } from '../../components'

const PlaceholderDocs = () => (
  <div>
    <DocsTitle
      title='Placeholder'
      subtitle='A Hixme UI placeholder component for views pending data'
    />
    <Grid fluid>
      <Row style={{ margin: '40px 0 20px 0' }}><Title smaller>Examples</Title></Row>
      <Col center='xs' style={{ marginBottom: '20px' }}>
        <Placeholder height='40px' margin='10px' width='100%' />
        <Placeholder height='40px' margin='10px' width='66%' />
        <Placeholder height='20px' margin='10px' width='50%' />
        <Placeholder height='20px' margin='10px' width='33%' />
      </Col>
      <Row center='xs'>
        <Code>
          {'<Placeholder height=\'10px\' width=\'200px\'  />'}
        </Code>
      </Row>
      <Row style={{ margin: '40px 0 20px 0' }}>
        <Title smaller>Props</Title>
      </Row>
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
                <td>height</td>
                <td>string</td>
                <td>N/A</td>
                <td>Height</td>
              </tr>
              <tr>
                <td>width</td>
                <td>string</td>
                <td>N/A</td>
                <td>Width</td>
              </tr>
              <tr>
                <td>margin</td>
                <td>string</td>
                <td>N/A</td>
                <td>Margin</td>
              </tr>
              <tr>
                <td>padding</td>
                <td>string</td>
                <td>N/A</td>
                <td>Padding</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Grid>
  </div>
)

export default PlaceholderDocs
