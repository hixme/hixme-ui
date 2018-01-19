import React from 'react'

import Container from '@hixme-ui/container'
import { Button, Input, FormGroup, Label } from '@hixme-ui/forms'
import { Code, DocsTitle } from '../../components'

/* eslint-disable jsx-a11y/label-has-for */
const FormsDocs = () => (
  <div>
    <DocsTitle
      title='Forms'
      subtitle='Single import for HUI form components'
    />
    <Container width='500px' margin='0px auto'>
      <br />
      <form>
        <FormGroup>
          <Label htmlFor='firstname'>First name</Label>
          <Input name='firstname' id='firstname' />
        </FormGroup>
        <Button>Submit</Button>
      </form>
    </Container>
    <Code>
      {`import { Button, Input, FormGroup, Checkbox, Select, Label } from '@hixme-ui/forms'


<form>
  <FormGroup>
    <Label htmlFor='firstname'>First name</Label>
    <Input name='firstname' id='firstname' />
  </FormGroup>
  <Button>Submit</Button>
</form>
`}
    </Code>
  </div>
)

export default FormsDocs
