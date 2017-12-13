import React from 'react'

import Input from '@hixme-ui/input'
import Title from '@hixme-ui/title'

const InputDocs = () => (
  <div>
    <Title>Input</Title>
    <br />
    <br />
    <Input type='email' required />
    <br />
    {`<Input type='email' required />`}
    <br />
  </div>
)

export default InputDocs
