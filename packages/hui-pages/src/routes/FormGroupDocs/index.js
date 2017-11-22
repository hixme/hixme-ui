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
    <pre>
      &lt;FormGroup&gt;
      <br />
        &lt;label&gt;Name&lt;/label&gt;
      <br />
        &lt;Input name='name' /&gt;
      <br />
      &lt;/FormGroup&gt;
    </pre>
  </div>
)

export default FormGroupDocs
