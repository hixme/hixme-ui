import React from 'react'
import { Grid, Row } from 'react-flexbox-grid'

import Separator from '@hixme-ui/separator'
import Table from '@hixme-ui/table'
import Text from '@hixme-ui/text'
import Title from '@hixme-ui/title'

import { Code, DocsTitle } from '../../components'

const SeparatorDocs = () => (
  <div>
    <DocsTitle
      title='Separator'
      subtitle='A simple separator'
    />
    <Grid fluid>
      <Row>
        <Separator />
        <Code>
          {'<Separator />'}
        </Code>
      </Row>
      <Row style={{ margin: '40px 0 20px 0' }}><Title smaller>Examples</Title></Row>
      <Row style={{ marginTop: '40px' }}>
        <Text thin p>
          The default size is 2px, but you can specify your own size. Additionally, you can apply any color prop
          from the theme.
        </Text>
        <Separator size='4px' primary />
        <Code>
          {'<Separator size=\'4px\' primary />'}
        </Code>
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
              <td>size</td>
              <td>string</td>
              <td>{'\'2px\''}</td>
              <td>Separator height</td>
            </tr>
            <tr>
              <td>background</td>
              <td>string</td>
              <td>N/A</td>
              <td>Specify your own color for the separator</td>
            </tr>
            <tr>
              <td>margin</td>
              <td>string</td>
              <td>N/A</td>
              <td>Margin around the separator</td>
            </tr>
            <tr>
              <td>padding</td>
              <td>string</td>
              <td>N/A</td>
              <td>Padding for the separator</td>
            </tr>
          </tbody>
        </Table>

      </Row>
    </Grid>
  </div>
)

export default SeparatorDocs

