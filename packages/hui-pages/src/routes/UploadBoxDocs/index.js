import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'

import Table from '@hixme-ui/table'
import Text from '@hixme-ui/text'
import Title from '@hixme-ui/title'
import UploadBox from '@hixme-ui/upload-box'

import { Code, DocsTitle } from '../../components'

const UploadBoxDocs = () => (
  <div>
    <DocsTitle
      title='UploadBox'
      subtitle='A styled upload component built on react-dropzone'
    />
    <Grid fluid>
      <Row center='xs' style={{ margin: '60px 0 40px 0' }}>
        <Col xs>
          <UploadBox value='Give all your files to me!' />
        </Col>
      </Row>
      <Row center='xs'>
        <Code>
          {'<UploadBox value=\'Give all your files to me!\' />'}
        </Code>
      </Row>
      <Row center='xs' style={{ margin: '60px 0 40px 0' }}>
        <Col xs={12}>
          <Text thin large>Providing the compact prop gives you an UploadBox with a little less height.</Text>
        </Col>
      </Row>
      <Row center='xs' style={{ margin: '20px 0 40px 0' }}>
        <Col xs={6}>
          <UploadBox compact />
        </Col>
      </Row>
      <Row center='xs'>
        <Code>
          {'<UploadBox compact />'}
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
                <td>compact</td>
                <td>bool</td>
                <td>false</td>
                <td>Upload box with less height</td>
              </tr>
              <tr>
                <td>value</td>
                <td>string</td>
                <td>N/A</td>
                <td>Add your own description inside the UploadBox</td>
              </tr>
              <tr>
                <td>onDrop</td>
                <td>function</td>
                <td>N/A</td>
                <td>Function to run on file drop</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Grid>
  </div>
)

export default UploadBoxDocs

