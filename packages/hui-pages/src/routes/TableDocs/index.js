import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'

import Table from '@hixme-ui/table'
import Title from '@hixme-ui/title'

import { Code, DocsTitle } from '../../components'

const CheckboxDocs = () => (
  <Grid fluid>
    <DocsTitle
      title='Table'
      subtitle='A styled table component. Highlights every other row when receiving the striped prop'
    />
    <Row>
      <Col xs={12}>
        <Code>
          {`import Table from '@hixme-ui/table'
          
<Table striped alignHeader='left' alignBody='right'>
  <thead>
    <tr>
      <th>Header</th>
      <th>Header</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Table data</td>
      <td>Table data</td>
    </tr>
  </tbody>
</Table>`}
        </Code>
      </Col>
    </Row>
    <Row center='xs' style={{ marginBottom: '20px' }}>
      <Col xs={12} sm={8}>
        <Row style={{ margin: '20px 0' }}>
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
        <Row style={{ margin: '20px 0' }}>
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
    <Row center='xs' style={{ margin: '20px 0' }}>
      <Col xs={12} sm={8}>
        <Row style={{ margin: '20px 0' }}>
          <Title smaller>Compact table</Title>
        </Row>
        <Table striped compact>
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
              <td>compact</td>
              <td>boolean</td>
              <td>false</td>
              <td>Table with less height and padding</td>
            </tr>
            <tr>
              <td>striped</td>
              <td>boolean</td>
              <td>false</td>
              <td>Different background color on alternating rows</td>
            </tr>
            <tr>
              <td>vertStriped</td>
              <td>boolean</td>
              <td>false</td>
              <td>Different background color on alternating columns</td>
            </tr>
            <tr>
              <td>alignHeader</td>
              <td>string</td>
              <td>{"'center'"}</td>
              <td>Text align on the {'<thead />'}</td>
            </tr>
            <tr>
              <td>alignBody</td>
              <td>string</td>
              <td>{"'left'"}</td>
              <td>Text align on the {'<tbody />'}</td>
            </tr>
          </tbody>
        </Table>
      </Col>
    </Row>
  </Grid>
)

export default CheckboxDocs

