import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'

import Table from '@hixme-ui/table'
import Text from '@hixme-ui/text'
import Title from '@hixme-ui/title'

import { Code, DocsTitle } from '../../components'

const TextDocs = () => (
  <Grid fluid>
    <DocsTitle
      title='Text'
      subtitle='A fun text wrapper for applying various colors, sizes, and styles with ease.'
    />
    <Row>
      <Col xs={12}>
        <Text primary>Primary text</Text>
        <Code>
          {'<Text primary>Primary text</Text>'}
        </Code>
        <Text warning>Warning text</Text>
        <Code>
          {'<Text warning>Warning text</Text>'}
        </Code>
        <Text error>Error text</Text>
        <Code>
          {'<Text error>Error text</Text>'}
        </Code>
        <Text label>Label</Text>
        <Code>
          {'<Text label>Name</Text>'}
        </Code>
        <Text a primary href='//hui.hixme.com/typography'>Text Link</Text>
        <Code>
          {'<Text a primary href="//hui.hixme.com/typography">Text Link</Text>'}
        </Code>
      </Col>
    </Row>
    <Row style={{ margin: '40px 0 10px' }}>
      <Title smaller>Font Sizes</Title>
    </Row>
    <Row>
      <Table striped style={{ width: 'unset' }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Font Size</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>smallest</td>
            <td>{'8px'}</td>
          </tr>
          <tr>
            <td>smaller</td>
            <td>{'10px'}</td>
          </tr>
          <tr>
            <td>small</td>
            <td>{'12px'}</td>
          </tr>
          <tr>
            <td>medium</td>
            <td>{'16px'}</td>
          </tr>
          <tr>
            <td>large</td>
            <td>{'18px'}</td>
          </tr>
          <tr>
            <td>larger</td>
            <td>{'20px'}</td>
          </tr>
          <tr>
            <td>jumbo</td>
            <td>{'22px'}</td>
          </tr>
        </tbody>
      </Table>
    </Row>
  </Grid>
)

export default TextDocs
