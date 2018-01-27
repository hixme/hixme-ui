import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'

import BenefitPrice from '@hixme-ui/benefit-price'
import Table from '@hixme-ui/table'
import Title from '@hixme-ui/title'

import { Code, DocsTitle } from '../../components'

const BenefitPriceDocs = () => (
  <div>
    <DocsTitle
      title='Benefit Price'
      subtitle='A Hixme UI styled benefit price component'
    />
    <Grid fluid>
      <Row style={{ margin: '40px 0 20px 0' }}><Title smaller>Examples</Title></Row>
      <Row center='xs' style={{ marginBottom: '40px' }}>
        <BenefitPrice value={86} payCycle={52} />
      </Row>
      <Row center='xs'>
        <Code>
          {'<BenefitPrice value={86} payCycle={24} />'}
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
                <td>Input value used to calculate a Price for a given pay cycle.</td>
              </tr>
              <tr>
                <td>payCycle</td>
                <td>number</td>
                <td>12</td>
                <td>Applies a label, based on the given cycle, beneath the styled price</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Grid>
  </div>
)

export default BenefitPriceDocs

