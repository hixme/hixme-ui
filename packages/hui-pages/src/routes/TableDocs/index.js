import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'

import Checkbox from '@hixme-ui/checkbox'
import Table from '@hixme-ui/table'
import Title from '@hixme-ui/title'

const CheckboxDocs = () => (
  <Grid fluid>
    <Row center='xs'>
      <Title>Table</Title>
    </Row>
    <Row center='xs' style={{ margin: '20px 0' }}>
      <Col xs={12} sm={8}>
        <Row style={{ margin: '20px 0'}}>
          <Title smaller>Default</Title>
        </Row>
        <Table>
          <thead>
            <tr>
              <th>Header</th>
              <th>Header</th>
              <th>Header</th>
            </tr>
          </thead>
            <tbody>
              <tr>
                <td>Table data</td>
                <td>Table data</td>
                <td>Table data</td>
            </tr>
            <tr>
              <td>Table data</td>
              <td>Table data</td>
              <td>Table data</td>
            </tr>
            <tr>
              <td>Table data</td>
              <td>Table data</td>
              <td>Table data</td>
            </tr>
            <tr>
              <td>Table data</td>
              <td>Table data</td>
              <td>Table data</td>
            </tr>
          </tbody>
        </Table>
      </Col>
    </Row>
    <Row center='xs' style={{ margin: '20px 0' }}>
      <Col xs={12} sm={8}>
        <Row style={{ margin: '20px 0'}}>
          <Title smaller>Striped Table</Title>
        </Row>
        <Table striped>
          <thead>
            <tr>
              <th>Header</th>
              <th>Header</th>
              <th>Header</th>
            </tr>
          </thead>
            <tbody>
              <tr>
                <td>Table data</td>
                <td>Table data</td>
                <td>Table data</td>
            </tr>
            <tr>
              <td>Table data</td>
              <td>Table data</td>
              <td>Table data</td>
            </tr>
            <tr>
              <td>Table data</td>
              <td>Table data</td>
              <td>Table data</td>
            </tr>
            <tr>
              <td>Table data</td>
              <td>Table data</td>
              <td>Table data</td>
            </tr>
          </tbody>
        </Table>
      </Col>
    </Row>
  </Grid>
)

export default CheckboxDocs

