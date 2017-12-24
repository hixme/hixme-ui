import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'

import Title from '@hixme-ui/title'

import DocsTitle from '../../components/DocsTitle'

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
          <code>
            {'<Title>Title default</Title>'}
          </code>
        </Col>
      </Row>
      <Row center='xs' middle='xs'>
        <Col xs={6}>
          <Title jumbo>Title jumbo</Title>
        </Col>
        <Col xs={6}>
          <code>
            {'<Title jumbo>Title jumbo</Title>'}
          </code>
        </Col>
      </Row>
      <Row center='xs' middle='xs'>
        <Col xs={6}>
          <Title small>Title small</Title>
        </Col>
        <Col xs={6}>
          <code>
            {'<Title small>Title small</Title>'}
          </code>
        </Col>
      </Row>
      <Row center='xs' middle='xs'>
        <Col xs={6}>
          <Title smaller>Title smaller</Title>
        </Col>
        <Col xs={6}>
          <code>
            {'<Title smaller>Title smaller</Title>'}
          </code>
        </Col>
      </Row>
      <Row center='xs' middle='xs'>
        <Col xs={6}>
          <Title smallest>Title smallest</Title>
        </Col>
        <Col xs={6}>
          <code>
            {'<Title smallest>Title smallest</Title>'}
          </code>
        </Col>
      </Row>
    </Grid>
  </div>
)

export default TitleDocs
