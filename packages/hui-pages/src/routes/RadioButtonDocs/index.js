import React from 'react'
import { Grid, Row } from 'react-flexbox-grid'

import Container from '@hixme-ui/container'
import RadioButton from '@hixme-ui/radio-button'

import { Code, DocsTitle } from '../../components'

const RadioDocs = () => (
  <div>
    <DocsTitle
      title='Radio Button'
      subtitle='A Hixme UI radio form component'
    />
    <Grid fluid>
      <Row style={{ marginBottom: '20px' }}>
        <Container width='200px' margin='0 auto'>
          <RadioButton name='gender' text='Male' value='Male' />
          <br />
          <br />
          <RadioButton name='gender' text='Female' value='Female' />
        </Container>
      </Row>
      <Row center='xs'>
        <Code>
          {`<RadioButton name='gender' text='Male' />
<br />
<br />
<RadioButton name='gender' text='Female' />
`}
        </Code>
      </Row>
    </Grid>
  </div>
)

export default RadioDocs

