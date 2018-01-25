import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'

import Table from '@hixme-ui/table'
import Title from '@hixme-ui/title'

import { Code, DocsTitle } from '../../components'

const ContentContainerDocs = () => (
  <div>
    <DocsTitle
      title='Content Container'
      subtitle='A container component that imposes a max width on its contents'
    />
    <Grid fluid>
      <Row center='xs'>
        <Code>
          {`<ContentContainer>
  <h1>Something very wide</h1>
  <p>
    Lorem ipsum...
  </p>
</ContentContainer>
`}
        </Code>
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
                <td>contentWidth</td>
                <td>string</td>
                <td>{'\'900px\''}</td>
                <td>Container max width value</td>
              </tr>
              <tr>
                <td>contentPadding</td>
                <td>string</td>
                <td>{'\'20px\''}</td>
                <td>Container padding value</td>
              </tr>
              <tr>
                <td>contentMargin</td>
                <td>string</td>
                <td>{'\'0 auto\''}</td>
                <td>Container margin value</td>
              </tr>
              <tr>
                <td>height</td>
                <td>string</td>
                <td>N/A</td>
                <td>Container height value</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Grid>
  </div>
)

export default ContentContainerDocs

