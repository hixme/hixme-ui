import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'

import Input from '@hixme-ui/input'
import Table from '@hixme-ui/table'
import Title from '@hixme-ui/title'

import { Code, DocsTitle } from '../../components'

const InputDocs = () => (
  <div>
    <DocsTitle
      title='Input'
      subtitle='A Hixme UI styled input component'
    />
    <Grid fluid>
      <Row>
        <Col xs={4}>
          <Input type='email' />
        </Col>
        <Col xs={6}>
          <Code>
            {'<Input type=\'email\' />'}
          </Code>
        </Col>
      </Row>

      <Row>
        <Col xs={4}>
          <Input search />
        </Col>
        <Col xs={6}>
          <Code>
            {'<Input search />'}
          </Code>
        </Col>
      </Row>

      <Row>
        <Col xs={4}>
          <Input phone error />
        </Col>
        <Col xs={6}>
          <Code>
            {'<Input phone error />'}
          </Code>
        </Col>
      </Row>

      <Row>
        <Col xs={4}>
          <Input date />
        </Col>
        <Col xs={6}>
          <Code>
            {'<Input date />'}
          </Code>
        </Col>
      </Row>

      <Row>
        <Col xs={4}>
          <Input ssn />
        </Col>
        <Col xs={6}>
          <Code>
            {'<Input ssn />'}
          </Code>
        </Col>
      </Row>

      <Row>
        <Col xs={4}>
          <Input large />
        </Col>
        <Col xs={6}>
          <Code>
            {'<Input large />'}
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
                <td>search</td>
                <td>bool</td>
                <td>N/A</td>
                <td>Input field with search icon</td>
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
