import React from 'react'
import { Grid } from 'react-flexbox-grid'

import Checkbox from '@hixme-ui/checkbox'
import Title from '@hixme-ui/title'

import DocsTitle from '../../components/DocsTitle'

const CheckboxDocs = () => (
  <Grid fluid>
    <DocsTitle
      title='Checkbox' 
      subtitle='A Hixme UI styled checkbox component' 
    />
    <Checkbox defaultChecked text='Checkbox with a label' />
    <br />
    <Checkbox defaultChecked small text='Small checkbox with a label' />
    <br />
    <Checkbox disabled text='Disabled checkbox' />
  </Grid>
)

export default CheckboxDocs

