import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'

import Select from '@hixme-ui/select'
import Table from '@hixme-ui/table'
import Text from '@hixme-ui/text'
import Title from '@hixme-ui/title'

import { Code, DocsTitle } from '../../components'

const SelectDocs = () => (
  <div>
    <DocsTitle
      title='Select'
      subtitle='A Hixme UI styled select component'
    />
    <Grid fluid>
      <Row style={{ marginBottom: '15px' }}>
        <Col xs={12}>
          <Text thin>You may supply select options in one of two ways:</Text>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={6}>
          <Select list={[{ id: 0, name: 'Hello' }, { id: 1, name: 'Goodbye' }]} />
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
          <Select>
            <option value='hello'>Hello</option>
            <option value='goodbye'>Goodbye</option>
          </Select>
          <Code>
            {`<Select>
  <option value='hello'>Hello</option>
  <option value='goodbye'>Goodbye</option>
</Select>`}
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
                <td>list</td>
                <td>array</td>
                <td>N/A</td>
                <td>Array populated with ID and Name for each option on the Select component</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Grid>
  </div>
)

export default SelectDocs
