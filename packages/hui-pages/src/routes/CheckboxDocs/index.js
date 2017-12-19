import React from 'react'

import Checkbox from '@hixme-ui/checkbox'
import Title from '@hixme-ui/title'

const CheckboxDocs = () => (
  <div>
    <Title>Checkbox</Title>
    <br />
    <Checkbox defaultChecked text='Checkbox with a label' />
    <br />
    <Checkbox defaultChecked small text='Small checkbox with a label' />
    <br />
    <Checkbox disabled text='Disabled checkbox' />
  </div>
)

export default CheckboxDocs

