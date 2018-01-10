import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'

import SocialSecurity from '@hixme-ui/social-security'
import Table from '@hixme-ui/table'
import Title from '@hixme-ui/title'

import { Code, DocsTitle } from '../../components'

const SocialSecurityDocs = () => (
  <div>
    <DocsTitle
      title='SocialSecurity'
      subtitle='A Hixme UI styled social security component'
    />
    <Grid fluid>
      <Row style={{ margin: '40px 0 20px 0' }}><Title smaller>Examples</Title></Row>
      <Row>
        <Col xs={6}>
          <Row center='xs'>
            <SocialSecurity number='123456789' />
          </Row>
          <Row center='xs'>
            <Code>
              {'<SocialSecurity number=\'123456789\' />'}
            </Code>
          </Row>
        </Col>
        <Col xs={6}>
          <Row center='xs'>
            <SocialSecurity number='123456789' showFull />
          </Row>
          <Row center='xs'>
            <Code>
              {`<SocialSecurity number='123456789'
                showFull />`}
            </Code>
          </Row>
        </Col>
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
              <td>Social security number</td>
            </tr>
            <tr>
              <td>showFull</td>
              <td>boolean</td>
              <td>false</td>
              <td>Show full number</td>
            </tr>
          </tbody>
        </Table>
      </Row>
    </Grid>
  </div>
)

export default SocialSecurityDocs

