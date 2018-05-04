import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'

import Select from '@hixme-ui/select'
import Table from '@hixme-ui/table'
import Text from '@hixme-ui/text'
import Title from '@hixme-ui/title'

import HixmeReactSelectExample from './HixmeReactSelectExample'
import { Code, DocsTitle } from '../../components'

const SelectDocs = () => (
  <div>
    <DocsTitle title='Select' subtitle='A Hixme UI styled select component' />
    <Grid fluid>
      <Row style={{ marginBottom: '15px' }}>
        <Col xs={12}>
          <Text thin>You may supply select options in one of two ways:</Text>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={6}>
          <Select
            list={[{ id: 0, name: 'Hello' }, { id: 1, name: 'Goodbye' }]}
          />
          <Code>
            {`<Select 
  list={[
    {id: 0, name: 'Hello'}, 
    {id: 1, name: 'Goodbye'}
  ]} 
/>`}
          </Code>
        </Col>
        <Col xs={12} sm={6}>
          <Select placeholder='Select any option...' defaultValue=''>
            <option value='hello'>Hello</option>
            <option value='goodbye'>Goodbye</option>
          </Select>
          <Code>
            {`<Select placeholder='Select any option...' defaultValue=''>
  <option value='hello'>Hello</option>
  <option value='goodbye'>Goodbye</option>
</Select>`}
          </Code>
        </Col>
      </Row>
      <Row style={{ margin: '20px 0' }}>
        <Col xs={12}>
          <Text thin>Additionally, the Select has a loading state:</Text>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Select loading list={[{ id: 0, name: 'Hello' }]} />
          <Code>{"<Select loading list={[{ id: 0, name: 'Hello' }]} />"}</Code>
        </Col>
      </Row>
      <Row style={{ margin: '20px 0' }}>
        <Col xs={12}>
          <Text thin>
            We&#39;ve also reimplemented the react-select pacakge with styled-components in order to use
            without a stylesheet.
          </Text>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <HixmeReactSelectExample />
          <Code>{`<HixmeReactSelect
  multi
  onChange={this.handleOnChange}
  value={value}
  options={[
    { value: 1, label: 'You' },
    { value: 2, label: 'were' },
    { value: 3, label: 'my' },
    { value: 4, label: 'brother' },
    { value: 5, label: 'Anakin' },
  ]}
/>
`}</Code>
        </Col>
      </Row>
      <Row style={{ margin: '40px 0 20px 0' }}>
        <Title smaller>Props</Title>
      </Row>
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
                <td>list</td>
                <td>array</td>
                <td>N/A</td>
                <td>
                  Array populated with ID and Name for each option on the Select
                  component
                </td>
              </tr>
              <tr>
                <td>placeholder</td>
                <td>string</td>
                <td>null</td>
                <td>
                  Select placeholder text. Placeholder option has value of empty
                  string
                </td>
              </tr>
              <tr>
                <td>loading</td>
                <td>bool</td>
                <td>false</td>
                <td>Loading state for Select</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Grid>
  </div>
)

export default SelectDocs
