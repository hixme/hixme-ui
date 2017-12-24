import React from 'react'
import { Grid, Row } from 'react-flexbox-grid'
import Highlight from 'react-highlight'

import Input from '@hixme-ui/input'
import Table from '@hixme-ui/table'
import Title from '@hixme-ui/title'

import DocsTitle from '../../components/DocsTitle'

const InputDocs = () => (
  <div>
    <DocsTitle
      title='Input'
      subtitle='A Hixme UI styled input component'
    />
    <Grid fluid>
      <Row>
        <Input type='email' required />
        <Highlight>
          {'<Input type=\'email\' required />'}
        </Highlight>
      </Row>
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
              <td>Assigns a class to the Input component</td>
            </tr>
            <tr>
              <td>invalid</td>
              <td>bool</td>
              <td>N/A</td>
              <td>When combinded with <code>touched</code>, outline color validation on field touch</td>
            </tr>
            <tr>
              <td>large</td>
              <td>bool</td>
              <td>false</td>
              <td>Large Input field component. Field is regular size by default</td>
            </tr>
            <tr>
              <td>onFocus</td>
              <td>func</td>
              <td>N/A</td>
              <td>Input field behavior on focus state</td>
            </tr>
            <tr>
              <td>onBlur</td>
              <td>func</td>
              <td>N/A</td>
              <td>Input field behavior on blur state</td>
            </tr>
            <tr>
              <td>phone</td>
              <td>bool</td>
              <td>N/A</td>
              <td>
                Masked input field with formatting for phone number
                <br />
                ** you can not use the placeholder attribute with masked inputs
              </td>
            </tr>
            <tr>
              <td>search</td>
              <td>bool</td>
              <td>N/A</td>
              <td>Input field with search icon</td>
            </tr>
            <tr>
              <td>ssn</td>
              <td>bool</td>
              <td>N/A</td>
              <td>
              Masked input field with formatting for social security number
              <br />
              ** you can not use the placeholder attribute with masked inputs
            </td>
            </tr>
            <tr>
              <td>style</td>
              <td>object</td>
              <td>N/A</td>
              <td>N/A</td>
            </tr>
            <tr>
              <td>touched</td>
              <td>bool</td>
              <td>N/A</td>
              <td>When combined with <code>invalid</code>, outline color validation on field touch</td>
            </tr>
          </tbody>
        </Table>
      </Row>
    </Grid>
  </div>
)

export default InputDocs
