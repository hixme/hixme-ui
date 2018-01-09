import React from 'react'
import { Grid, Row } from 'react-flexbox-grid'

import Phone from '@hixme-ui/phone'
import Table from '@hixme-ui/table'
import Title from '@hixme-ui/title'

import { Code, DocsTitle } from '../../components'

const PhoneDocs = () => (
  <div>
    <DocsTitle
      title='Phone'
      subtitle='A Hixme UI styled phone component'
    />
    <Grid fluid>
      <Row style={{ margin: '40px 0 20px 0' }}><Title smaller>Examples</Title></Row>
      <Row center='xs' style={{ marginBottom: '20px' }}>
        <Phone number='8881234567' />
      </Row>
      <Row center='xs'>
        <Code>
          {'<Phone number=\'8881234567\' />'}
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
              <td>number</td>
              <td>string</td>
              <td>N/A</td>
              <td>Phone number</td>
            </tr>
          </tbody>
        </Table>
      </Row>
    </Grid>
  </div>
)

export default PhoneDocs

