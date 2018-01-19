import React from 'react'
import { Grid, Row } from 'react-flexbox-grid'

import Email from '@hixme-ui/email'

import { Code, DocsTitle } from '../../components'

const EmailDocs = () => (
  <div>
    <DocsTitle title='Email' subtitle='A styled email link' />
    <Grid fluid>
      <Row center='xs' style={{ marginBottom: '30px' }}>
        <Email address='user@email.com' />
      </Row>
      <Row center='xs'>
        <Code>
          {'<Email address=\'user@email.com\' />'}
        </Code>
      </Row>
      <Row center='xs' style={{ marginBottom: '30px' }}>
        <Email address='user@email.com'>User</Email>
      </Row>
      <Row center='xs'>
        <Code>
          {'<Email address=\'user@email.com\'>User</Email>'}
        </Code>
      </Row>
    </Grid>
  </div>
  )

export default EmailDocs

