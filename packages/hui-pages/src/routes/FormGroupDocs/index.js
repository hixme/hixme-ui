import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'

import Title from '@hixme-ui/title'
import FormGroup from '@hixme-ui/form-group'
import Input from '@hixme-ui/input'

import { Code, DocsTitle } from '../../components'

/* eslint-disable jsx-a11y/label-has-for */
const FormGroupDocs = () => (
  <div>
    <DocsTitle
      title='Form Group'
      subtitle='Gives proper spacing for a grouping of label, form fields, and error messages'
    />
    <Grid fluid>
      <Row style={{ paddingBottom: '10px' }}>
        <Title small>Examples</Title>
      </Row>
      <Row>
        <Col xs={4}>
          <FormGroup>
            <label>Name</label>
            <Input name='name' />
          </FormGroup>
        </Col>
        <Col xs={8}>
          <Code>
            {`<FormGroup>
  <label>Name</label>
  <Input name='name' />
 </FormGroup>`}
          </Code>
        </Col>
      </Row>
      <Row>
        <Col xs={4}>
          <FormGroup label='Name' error='Name is required'>
            <Input name='name' />
          </FormGroup>
        </Col>
        <Col xs={8}>
          <Code>
            {`<FormGroup label='Name' error='Name is required'>
  <Input name='name' />
</FormGroup>`}
          </Code>
        </Col>
      </Row>
    </Grid>
  </div>
)

export default FormGroupDocs
