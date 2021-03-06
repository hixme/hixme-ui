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
      subtitle='A Hixme UI styled price component'
    />
    <Grid fluid>
      <Row style={{ margin: '40px 0 20px 0' }}><Title smaller>Examples</Title></Row>
      <Row center='xs' style={{ marginBottom: '40px' }}>
        <Price value={46.93} label='hixme-ui' />
      </Row>
      <Row center='xs'>
        <Code>
          {'<Price value={46.93} label=\'hixme-ui\' />'}
        </Code>
      </Row>
      <Row center='xs' style={{ margin: '40px 0' }}>
        <Price value={18033.43} includeCommas label='hixme-ui' />
      </Row>
      <Row center='xs'>
        <Code>
          {'<Price value={18033.43} includeCommas label=\'hixme-ui\' />'}
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
                <td>value</td>
                <td>number</td>
                <td>N/A</td>
                <td>Price value</td>
              </tr>
              <tr>
                <td>label</td>
                <td>string</td>
                <td>N/A</td>
                <td>Applies a label beneath the styled price</td>
              </tr>
              <tr>
                <td>includeCommas</td>
                <td>boolean</td>
                <td>false</td>
                <td>Add thousand comma separator</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Grid>
  </div>
)

export default PriceDocs

