import React from 'react'

import Select from '@hixme-ui/select'
import Title from '@hixme-ui/title'

const SelectDocs = () => (
  <div>
    <Title>Select</Title>
    <br />
    <br />
    <Select list={[{id: 0, name:'test'}]} />
    <br />
    {`<Select list={[{id: 0, name:'test'}]} />`}
    <br />
    <br />
    <br />
    <Select>
      <option value='hello'>Hello</option>
      <option value='goodbye'>Goodbye</option>
    </Select>
    <br />
    {`<Select>
      <option value='hello'>Hello</option>
      <option value='goodbye'>Goodbye</option>
    </Select>`}

  </div>
)

export default SelectDocs
