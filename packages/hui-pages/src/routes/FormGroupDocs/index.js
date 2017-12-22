import React from 'react'
import Highlight from 'react-highlight'

import FormGroup from '@hixme-ui/form-group'
import Input from '@hixme-ui/input'

import DocsTitle from '../../components/DocsTitle'

const FormGroupDocs = () => (
  <div>
    <DocsTitle
      title='Form Group' 
      subtitle='Gives proper spacing for a grouping of label, form fields, and error messages' 
    />
    <FormGroup>
      <label>Name</label>
      <Input name="name" />
    </FormGroup>
    <Highlight>
      {`<FormGroup>
  <label>Name</label>
  <Input name='name' />
</FormGroup>
`}
    </Highlight>
  </div>
)

export default FormGroupDocs
