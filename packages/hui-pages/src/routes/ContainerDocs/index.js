import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'

import Container from '@hixme-ui/container'
import Text from '@hixme-ui/text'

import { Code, DocsTitle } from '../../components'

const rowExampleStyles = { paddingBottom: '15px' }

const ContainerDocs = () => (
  <div>

    <DocsTitle
      title='Container'
      subtitle='A container component offering layout and styling options'
    />
    <Grid fluid>
      <Row style={rowExampleStyles}>
        <Col xs={4}>
          <Container border='1px solid red' muted rounded margin='0 0 30px 0'>
            <Text>I am in a container</Text>
          </Container>
        </Col>
        <Col xs={8}>
          <Code>
            {`<Container border='1px solid red' muted rounded margin='0 0 30px 0'>
  <Text>I am in a container</Text>
</Container>`}
          </Code>
        </Col>
      </Row>
      <Row style={rowExampleStyles}>
        <Col xs={4}>
          <Container opacity='.6' primary margin='0 0 30px 0'>
            <Text>I am in a container with opacity</Text>
          </Container>
        </Col>
        <Col xs={8}>
          <Code>
            {`<Container opacity='.6' primary margin='0 0 30px 0'>
  <Text>I am in a container with opacity</Text>
</Container>`}
          </Code>
        </Col>
      </Row>
    </Grid>
  </div>
)

export default ContainerDocs

