import React from 'react'
import { Grid, Row } from 'react-flexbox-grid'

import Checkbox from '@hixme-ui/checkbox'
import Table from '@hixme-ui/table'
import Title from '@hixme-ui/title'

import DocsTitle from '../../components/DocsTitle'

const CheckboxDocs = () => (
  <div>
    <DocsTitle
      title='Checkbox'
      subtitle='A Hixme UI styled checkbox component'
    />
    <Checkbox defaultChecked text='Checkbox with a label' />
    <br />
    <Checkbox defaultChecked small text='Small checkbox with a label' />
    <br />
    <Checkbox disabled text='Disabled checkbox' />
    <Grid fluid>
      <Row style={{ margin: '40px 0 20px 0' }}><Title smaller>Props</Title></Row>
      <Row center='xs'>
        <Table striped>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Default</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>className</td>
              <td>string</td>
              <td>N/A</td>
              <td>Assigns a class to the Checkbox component</td>
            </tr>
            <tr>
              <td>name</td>
              <td>string</td>
              <td>N/A</td>
              <td>Checkbox name</td>
            </tr>
            <tr>
              <td>text</td>
              <td>string</td>
              <td>{'\'Checkbox\''}</td>
              <td>Checkbox label</td>
            </tr>
            <tr>
              <td>small</td>
              <td>bool</td>
              <td>false</td>
              <td>Small checkbox size</td>
            </tr>
            <tr>
              <td>defaultChecked</td>
              <td>bool</td>
              <td>false</td>
              <td>Checkbox component default state</td>
            </tr>
            <tr>
              <td>checked</td>
              <td>bool</td>
              <td>false</td>
              <td>Checkbox component current state</td>
            </tr>
            <tr>
              <td>onChange</td>
              <td>func</td>
              <td>N/A</td>
              <td>A {'function'} that fires on checkbox change</td>
            </tr>
            <tr>
              <td>disabled</td>
              <td>boll</td>
              <td>false</td>
              <td>Disabled state of the checkbox</td>
            </tr>
          </tbody>
        </Table>
      </Row>
    </Grid>
  </div>
)

export default CheckboxDocs

