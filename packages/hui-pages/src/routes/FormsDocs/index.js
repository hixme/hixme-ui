import React from 'react'

import Container from '@hixme-ui/container'
import { Button, Input, FormGroup, Label, Select, RadioButton } from '@hixme-ui/forms'
import { Code, DocsTitle } from '../../components'

/* eslint-disable jsx-a11y/label-has-for */
const FormsDocs = () => (
  <div>
    <DocsTitle
      title='Forms'
      subtitle='Single import for HUI form components'
    />
    <Container width='500px' margin='0px auto'>
      <form>
        <FormGroup>
          <Label htmlFor='title'>Title</Label>
          <Select name='k' id='title'>
            <option value='mr'>Mr</option>
            <option value='mrs'>Mrs</option>
            <option value='ms'>Ms</option>
            <option value='miss'>Miss</option>
          </Select>
        </FormGroup>
        <FormGroup>
          <Label htmlFor='firstname'>First name</Label>
          <Input name='firstname' id='firstname' />
        </FormGroup>
        <FormGroup>
          <RadioButton
            name='gender'
            text='Male'
            value='male'
            style={{
              display: 'inline-block',
              marginRight: '30px',
            }}
          />
          <RadioButton
            name='gender'
            text='Female'
            value='female'
          />
        </FormGroup>
        <Button>Submit</Button>
      </form>
    </Container>
    <Code>
      {`import {
  Button,
  Checkbox,
  FormGroup,
  Input,
  Label,
  RadioButton,
  Select,
} from '@hixme-ui/forms'

<form>
  <FormGroup>
    <Label htmlFor='title'>Title</Label>
    <Select name='k' id='title'>
      <option value='mr'>Mr</option>
      <option value='mrs'>Mrs</option>
      <option value='ms'>Ms</option>
      <option value='miss'>Miss</option>
    </Select>
  </FormGroup>
  <FormGroup>
    <Label htmlFor='firstname'>First name</Label>
    <Input name='firstname' id='firstname' />
  </FormGroup>
  <FormGroup>
    <RadioButton
      name='gender'
      text='Male'
      value='male'
      style={{
        display: 'inline-block',
        marginRight: '30px',
      }}
    />
    <RadioButton
      name='gender'
      text='Female'
      value='female'
    />
  </FormGroup>
  <Button>Submit</Button>
</form>
`}
    </Code>
  </div>
)

export default FormsDocs
