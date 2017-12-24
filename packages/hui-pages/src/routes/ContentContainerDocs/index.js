import React from 'react'
import { Grid, Row } from 'react-flexbox-grid'

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
      <Row>
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
          </tbody>
        </Table>
      </Row>
    </Grid>
  </div>
)

export default ContentContainerDocs

