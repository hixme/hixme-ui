import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'

import { FormatDate, FormatUtcDate, ReadableDatetime } from '@hixme-ui/dates'
import Text from '@hixme-ui/text'
import Title from '@hixme-ui/title'

import { Code, DocsTitle } from '../../components'

const DatesDocs = () => (
  <div>
    <DocsTitle title='Dates' subtitle='Utility components for formatting dates' />
    <Grid fluid>
      <Row>
        <Col xs>
          <Text p thin medium>
            Each date component uses Text, so any props that can be supplied to Text will work here as well.
          </Text>
        </Col>
      </Row>
      <Row>
        <Col xs>
          <Title smaller>FormatDate</Title>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <FormatDate date='04-04-18' format='YYYY-MM-DD' inputFormat='MM-DD-YY' primary />
        </Col>
      </Row>
      <Row style={{ marginBottom: '30px' }}>
        <Col xs>
          <Code>
            {`<FormatDate 
  date='04-04-18' 
  format='YYYY-MM-DD' 
  inputFormat='MM-DD-YY' 
  primary 
/>`}
          </Code>
        </Col>
      </Row>
      <Row>
        <Col xs>
          <Title smaller>FormatUtcDate</Title>
        </Col>
      </Row>
      <Row>
        <Col xs>
          <FormatUtcDate datetime='2013-02-04T18:35:24+00:00' format='YYYY-MM-DD' />
        </Col>
      </Row>
      <Row style={{ marginBottom: '30px' }}>
        <Col xs>
          <Code>
            {'<FormatUtcDate datetime=\'2013-02-04T18:35:24+00:00\' format=\'YYYY-MM-DD\' />'}
          </Code>
        </Col>
      </Row>
      <Row>
        <Col xs>
          <Title smaller>ReadableDatetime</Title>
        </Col>
      </Row>
      <Row>
        <Col xs>
          <ReadableDatetime datetime='2010-01-01T05:06:07' format='YYYY-MM-DD' />
        </Col>
      </Row>
      <Row style={{ marginBottom: '30px' }}>
        <Col xs>
          <Code>
            {'<ReadableDatetime datetime=\'2010-01-01T05:06:07\' format=\'YYYY-MM-DD\' />'}
          </Code>
        </Col>
      </Row>
    </Grid>
  </div>
)

export default DatesDocs

