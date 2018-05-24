import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'

import Container from '@hixme-ui/container'
import Tabs from '@hixme-ui/tabs'
import Table from '@hixme-ui/table'
import Title from '@hixme-ui/title'

import { Code, DocsTitle } from '../../components'

const tabListRow = [{
  name: 'One',
  content: <Container
    flex
    background='white'
    rounded
    border='1px solid Gainsboro'
    margin='10px 0 0 0'
  >
    One
  </Container>,
}, {
  name: 'Two',
  content: <Container
    flex
    background='white'
    rounded
    border='1px solid Gainsboro'
    margin='10px 0 0 0'
  >
    Two
  </Container>,
}, {
  name: 'Three',
  content: <Container
    flex
    background='white'
    rounded
    border='1px solid Gainsboro'
    margin='10px 0 0 0'
  >
    Three
  </Container> }, {
    name: 'Old MacDonald had a Farm',
    content: <Container
      flex
      background='white'
      rounded
      border='1px solid Gainsboro'
      margin='10px 0 0 0'
    >
      EIEIO
    </Container>,
  }]

const tabListCol = [{
  name: 'One',
  content: <Container flex rounded background='white' border='1px solid Gainsboro'>One</Container>,
}, {
  name: 'Two',
  content: <Container flex rounded background='white' border='1px solid Gainsboro'>Two</Container>,
}, {
  name: 'Three',
  content: <Container flex rounded background='white' border='1px solid Gainsboro'>Three</Container>,
}, {
  name: 'Old MacDonald had a Farm',
  content: <Container flex rounded background='white' border='1px solid Gainsboro'>E-I-E-I-O</Container>,
}]

const TabsDocs = () => (
  <div>
    <DocsTitle
      title='Tabs'
      subtitle='A Hixme UI styled tabs component'
    />
    <Grid fluid>
      <Row style={{ margin: '40px 0 20px 0' }}><Title smaller>Row Example</Title></Row>
      <Row center='xs' style={{ marginBottom: '20px' }}>
        <Tabs id='1' list={tabListRow} tabStyles={{ primary: true }} />
      </Row>
      <Row style={{ margin: '40px 0 20px 0' }}><Title smaller>Column Example</Title></Row>
      <Row style={{ marginBottom: '20px', height: '300px' }}>
        <Tabs id='2' list={tabListCol} direction='column' tabStyles={{ blue: true, width: '200px', marginBottom: '40px' }} />
      </Row>
      <Row center='xs'>
        <Code>
          {'<Tabs id=\'1\' direction=\'row\' list=\'{[{name: \'one\', content:\'one content\'}]}\'/>'}
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
                <td>required</td>
                <td>Tabs component unique id</td>
              </tr>
              <tr>
                <td>list</td>
                <td>array</td>
                <td>required</td>
                <td>Children for tabs</td>
              </tr>
              <tr>
                <td>initWithIndex</td>
                <td>number</td>
                <td>0</td>
                <td>Initialise component at a specfic tab index</td>
              </tr>
              <tr>
                <td>tabStyles</td>
                <td>object</td>
                <td>N/A</td>
                <td>width, bottomMargin, huiTextColor</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Grid>
  </div>
)

export default TabsDocs
