import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'

import Tabs from '@hixme-ui/tabs'
import Table from '@hixme-ui/table'
import Title from '@hixme-ui/title'

import { Code, DocsTitle } from '../../components'

const tabList = [{
  name: 'One',
  content: <div style={{ border: '1px solid blue' }}>One</div>,
}, {
  name: 'Two',
  content: <div style={{ border: '1px solid green' }}>Two</div>,
}, {
  name: 'Three',
  content: <div style={{ border: '1px solid orange' }}>Three</div>,
}, {
  name: 'Four',
  content: <div style={{ border: '1px solid skyblue' }}>Four</div>,
}, {
  name: 'Five',
  content: <div style={{ border: '1px solid crimson' }}>Five</div>,
}]

const TabsDocs = () => (
  <div>
    <DocsTitle
      title='Tabs'
      subtitle='A Hixme UI styled tabs component'
    />
    <Grid fluid>
      <Row style={{ margin: '40px 0 20px 0' }}><Title smaller>Examples</Title></Row>
      <Row center='xs' style={{ marginBottom: '20px' }}>
        <Tabs id='1' list={tabList} />
      </Row>
      <Row center='xs'>
        <Code>
          {'<Tabs id=\'1\' list=\'{[{name: \'one\', content:\'one content\'},...]}\' initWithIndex={1} />'}
        </Code>
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
                <td>id</td>
                <td>string</td>
                <td>REQUIRED</td>
                <td>Tabs component unique id</td>
              </tr>
              <tr>
                <td>list</td>
                <td>array</td>
                <td>REQUIRED</td>
                <td>Children for tabs</td>
              </tr>
              <tr>
                <td>initWithIndex</td>
                <td>number</td>
                <td>0</td>
                <td>Initialise component at a specfic tab index</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Grid>
  </div>
)

export default TabsDocs
