import React from 'react'

import FormGroup from '@hixme-ui/form-group'
import Input from '@hixme-ui/input'

const FormGroupDocs = () => (
  <div>
    <h1>Form Group</h1>
    <div>
      Gives proper spacing for a grouping of label, form fields, and error messages
    </div>
    <FormGroup>
      <label>Name</label>
      <Input name="name" />
    </FormGroup>
    {`
      <FormGroup>\n
        <label>Name</label>
        <Input name='name' />
      </FormGroup>
    `}
  </div>
)

export default FormGroupDocs
