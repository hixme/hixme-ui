import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'

import Title from '@hixme-ui/title'

import { Code, DocsTitle } from '../../components'

const TitleDocs = () => (
  <div>
    <DocsTitle
      title='Title'
      subtitle='A text wrapper for applying styles and sizes to title tags. Extends Text.'
    />
    <Grid fluid>
      <Row center='xs' middle='xs'>
        <Col xs={6}>
          <Title>Title default</Title>
        </Col>
        <Col xs={6}>
          <Code>
            {'<Title>Title default</Title>'}
          </Code>
        </Col>
      </Row>
      <Row center='xs' middle='xs'>
        <Col xs={6}>
          <Title jumbo>Title jumbo</Title>
        </Col>
        <Col xs={6}>
          <Code>
            {'<Title jumbo>Title jumbo</Title>'}
          </Code>
        </Col>
      </Row>
      <Row center='xs' middle='xs'>
        <Col xs={6}>
          <Title small>Title small</Title>
        </Col>
        <Col xs={6}>
          <Code>
            {'<Title small>Title small</Title>'}
          </Code>
        </Col>
      </Row>
      <Row center='xs' middle='xs'>
        <Col xs={6}>
          <Title smaller>Title smaller</Title>
        </Col>
        <Col xs={6}>
          <Code>
            {'<Title smaller>Title smaller</Title>'}
          </Code>
        </Col>
      </Row>
      <Row center='xs' middle='xs'>
        <Col xs={6}>
          <Title smallest>Title smallest</Title>
        </Col>
        <Col xs={6}>
          <Code>
            {'<Title smallest>Title smallest</Title>'}
          </Code>
        </Col>
      </Row>
    </Grid>
  </div>
)

export default TitleDocs
