import React from 'react'
import { Grid, Row } from 'react-flexbox-grid'

import RadioButton from '@hixme-ui/radio-button'
import Title from '@hixme-ui/title'

import { Code, DocsTitle } from '../../components'

const RadioDocs = () => (
  <div>
    <DocsTitle
      title='Radio Button'
      subtitle='A Hixme UI radio form component'
    />
    <Grid fluid>
      <Row style={{ margin: '40px 0 20px 0' }}><Title smaller>Examples</Title></Row>
      <Row center='xs' style={{ marginBottom: '20px' }}>
        <RadioButton name='gender' text='Male' value='Male' />
        <RadioButton name='gender' text='Female' value='Female' />
      </Row>
      <Row center='xs'>
        <Code>
          {`<RadioButton name='gender' text='Male' />
<RadioButton name='gender' text='Female' />
`}
        </Code>
      </Row>
    </Grid>
  </div>
)

export default RadioDocs

