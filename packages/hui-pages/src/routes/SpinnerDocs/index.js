import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'

import Spinner from '@hixme-ui/spinner'
import Icon from '@hixme-ui/icon'
import Table from '@hixme-ui/table'
import Title from '@hixme-ui/title'

import { Code, DocsTitle } from '../../components'

const SpinnerDocs = () => (
  <div>
    <DocsTitle
      title='Spinner'
      subtitle='Make things spin'
    />
    <Grid fluid>
      <Row style={{ margin: '40px 0 20px 0' }}><Title smaller>Examples</Title></Row>
      <Row middle='xs' center='xs' style={{ marginBottom: '40px' }}>
        <Col xs={3}>
          <Spinner animate duration='1.75s'>
            <Icon size={3} cog blue />
          </Spinner>
        </Col>
        <Col xs={9}>
          <Code>
            {`<Spinner animate duration='1.75s'>
  <Icon size={3} cog blue />
</Spinner>`}
          </Code>
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
                <td>animate</td>
                <td>bool</td>
                <td>false</td>
                <td>Is currently running animation</td>
              </tr>
              <tr>
                <td>duration</td>
                <td>string</td>
                <td>{"'1s'"}</td>
                <td>Speed of the spinning animation</td>
              </tr>
              <tr>
                <td>ease</td>
                <td>bool</td>
                <td>false</td>
                <td>Ease timing function</td>
              </tr>
              <tr>
                <td>linear</td>
                <td>bool</td>
                <td>true</td>
                <td>Linear timing function</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Grid>
  </div>
)

export default SpinnerDocs

