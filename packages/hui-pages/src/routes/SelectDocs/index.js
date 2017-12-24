import React from 'react'
import Highlight from 'react-highlight'
import { Grid, Row, Col } from 'react-flexbox-grid'

import Select from '@hixme-ui/select'
import Table from '@hixme-ui/table'
import Text from '@hixme-ui/text'
import Title from '@hixme-ui/title'

import DocsTitle from '../../components/DocsTitle'

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
          <Highlight>
            {`<Select 
  list={[
    {id: 0, name:'Hello'}, 
    {id: 1, name: 'Goodbye'}
  ]} 
/>`}
          </Highlight>
        </Col>
        <Col xs={12} sm={6}>
          <Select>
            <option value='hello'>Hello</option>
            <option value='goodbye'>Goodbye</option>
          </Select>
          <Highlight>
            {`<Select>
  <option value='hello'>Hello</option>
  <option value='goodbye'>Goodbye</option>
</Select>`}
          </Highlight>
        </Col>
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
              <td>list</td>
              <td>array</td>
              <td>N/A</td>
              <td>Array populated with ID and Name for each option on the Select component</td>
            </tr>
          </tbody>
        </Table>
      </Row>
    </Grid>
  </div>
)

export default SelectDocs
