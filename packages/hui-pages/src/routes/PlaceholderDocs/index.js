import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'

import Placeholder from '@hixme-ui/placeholder'
import Title from '@hixme-ui/title'
import Table from '@hixme-ui/table'

import { Code, DocsTitle } from '../../components'

const PlaceholderDocs = () => (
  <div>
    <DocsTitle
      title='Placeholder'
      subtitle='A Hixme UI placeholder component for views pending data'
    />
    <Grid fluid>
      <Row style={{ margin: '40px 0 20px 0' }}><Title smaller>Examples</Title></Row>
      <Col center='xs' style={{ marginBottom: '20px' }}>
        <Placeholder colorStop1='crimson' colorStop2='turquoise' height='4px' width='100%' />
        <Placeholder colorStop1='darkorange' colorStop2='lemonchiffon' width='66%' />
        <Placeholder colorStop1='turquoise' colorStop2='deeppink' width='50%' />
        <Placeholder colorStop1='mediumaquamarine' colorStop2='slateblue' />
        <Placeholder />
      </Col>
      <Row center='xs'>
        <Code>
          {'<Placeholder width=\'33%\' />'}
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
                <td>height</td>
                <td>string</td>
                <td>30px</td>
                <td>Height</td>
              </tr>
              <tr>
                <td>width</td>
                <td>string</td>
                <td>200px</td>
                <td>Width</td>
              </tr>
              <tr>
                <td>margin</td>
                <td>string</td>
                <td>20px</td>
                <td>Margin</td>
              </tr>
              <tr>
                <td>padding</td>
                <td>string</td>
                <td>0</td>
                <td>Padding</td>
              </tr>
              <tr>
                <td>colorStop1</td>
                <td>string</td>
                <td>#e7e7e7</td>
                <td>Linear gradient first color</td>
              </tr>
              <tr>
                <td>colorStop2</td>
                <td>string</td>
                <td>white</td>
                <td>Linear gradient second color</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Grid>
  </div>
)

export default PlaceholderDocs
