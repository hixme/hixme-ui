import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'

import Input from '@hixme-ui/input'
import Table from '@hixme-ui/table'
import Title from '@hixme-ui/title'

import { Code, DocsTitle } from '../../components'

const rowExampleStyles = { paddingBottom: '15px' }
const InputDocs = () => (
  <div>
    <DocsTitle
      title='Input'
      subtitle='A Hixme UI styled input component'
    />
    <Grid fluid>
      <Row style={rowExampleStyles}>
        <Col xs={4}>
          <Input type='email' />
        </Col>
        <Col xs={8}>
          <Code>
            {'<Input type=\'email\' />'}
          </Code>
        </Col>
      </Row>

      <Row style={rowExampleStyles}>
        <Col xs={4}>
          <Input search />
        </Col>
        <Col xs={8}>
          <Code>
            {'<Input search />'}
          </Code>
        </Col>
      </Row>

      <Row style={rowExampleStyles}>
        <Col xs={4}>
          <Input currency defaultValue='46.93' onChange={e => console.log(e.target.value)} />
        </Col>
        <Col xs={8}>
          <Code>
            {`<Input 
  currency
  defaultValue='46.93' 
  onChange={e => console.log(e.target.value)} 
/>`}
          </Code>
        </Col>
      </Row>

      <Row style={rowExampleStyles}>
        <Col xs={4}>
          <Input percentage defaultValue='46.93' onChange={e => console.log(e.target.value)} />
        </Col>
        <Col xs={8}>
          <Code>
            {`<Input 
  percentage
  defaultValue='46.93' 
  onChange={e => console.log(e.target.value)} 
/>`}
          </Code>
        </Col>
      </Row>

      <Row style={rowExampleStyles}>
        <Col xs={4}>
          <Input phone error value='1234567890' onChange={e => console.log(e.target.value)} />
        </Col>
        <Col xs={8}>
          <Code>
            {`<Input phone error
    value='1234567890' onChange={e => console.log(e.target.value)} />`}
          </Code>
        </Col>
      </Row>

      <Row style={rowExampleStyles}>
        <Col xs={4}>
          <Input date value='01/01/2018' onChange={e => console.log(e.target.value)} />
        </Col>
        <Col xs={8}>
          <Code>
            {`<Input date value='01/01/2018'
  onChange={e => console.log(e.target.value)} />`}
          </Code>
        </Col>
      </Row>

      <Row style={rowExampleStyles}>
        <Col xs={4}>
          <Input ssn value='123456789' onChange={e => console.log(e.target.value)} />
        </Col>
        <Col xs={8}>
          <Code>
            {`<Input ssn value='123456789'
  onChange={e => console.log(e.target.value)} />`}
          </Code>
        </Col>
      </Row>

      <Row style={rowExampleStyles}>
        <Col xs={4}>
          <Input large />
        </Col>
        <Col xs={8}>
          <Code>
            {'<Input large />'}
          </Code>
        </Col>
      </Row>
      <Row style={rowExampleStyles}>
        <Col xs={4}>
          <Input loading />
        </Col>
        <Col xs={8}>
          <Code>
            {'<Input loading />'}
          </Code>
        </Col>
      </Row>
      <Row style={rowExampleStyles}>
        <Col xs={4}>
          <Input mini />
        </Col>
        <Col xs={8}>
          <Code>
            {'<Input mini />'}
          </Code>
        </Col>
      </Row>

      <Row style={{ margin: '40px 0 20px 0' }}><Title smaller>Props</Title></Row>
      <Row center='xs'>
        <Col xs={12}>
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
                <td>large</td>
                <td>bool</td>
                <td>false</td>
                <td>Large Input field component. Field is regular size by default</td>
              </tr>
              <tr>
                <td>mini</td>
                <td>bool</td>
                <td>false</td>
                <td>Mini Input field component. Field is regular size by default</td>
              </tr>
              <tr>
                <td>search</td>
                <td>bool</td>
                <td>false</td>
                <td>Input field with search icon</td>
              </tr>
              <tr>
                <td>percentage</td>
                <td>bool</td>
                <td>false</td>
                <td>Input field with percent icon</td>
              </tr>
              <tr>
                <td>currency</td>
                <td>bool</td>
                <td>false</td>
                <td>Input field with dollar icon</td>
              </tr>
              <tr>
                <td>loading</td>
                <td>bool</td>
                <td>false</td>
                <td>Input field loading state</td>
              </tr>
              <tr>
                <td>date</td>
                <td>bool</td>
                <td>N/A</td>
                <td>
                  Masked input field with formatting for date number
                  <br />
                  ** you can not use the placeholder attribute with masked inputs
                </td>
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
                <td>error</td>
                <td>bool</td>
                <td>false</td>
                <td>Render the error state of the input by providing the error prop</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Grid>
  </div>
)

export default InputDocs
