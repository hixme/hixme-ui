import React from 'react'

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
    <FormGroup>
      <label>Name</label>
      <Input name='name' />
    </FormGroup>
    <Code>
      {`<FormGroup>
  <label>Name</label>
  <Input name='name' />
</FormGroup>
`}
    </Code>
  </div>
)

export default FormGroupDocs
