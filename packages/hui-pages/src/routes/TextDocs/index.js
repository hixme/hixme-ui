import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import Highlight from 'react-highlight'

import Text from '@hixme-ui/text'

import DocsTitle from '../../components/DocsTitle'

const TextDocs = () => (
  <Grid fluid>
    <DocsTitle
      title='Text' 
      subtitle='A fun text wrapper for applying various colors, sizes, and styles with ease.' 
    />
    <Row>
      <Col xs={12}>
        <Text primary>Primary text</Text>
        <Highlight className='html'>
          {`<Text primary>Primary text</Text>`}
        </Highlight>
        <Text warning>Warning text</Text>
        <Highlight className='html'>
          {`<Text warning>Warning text</Text>`}
        </Highlight>
        <Text error>Error text</Text>
        <Highlight className='html'>
          {`<Text error>Error text</Text>`}
        </Highlight>
        <Text label>Label</Text>
        <Highlight className='html'>
          {`<Text label>Name</Text>`}
        </Highlight>
        <Text a primary href="//hui.hixme.com/typography">Text Link</Text>
        <Highlight className='html'>
          {`<Text a primary href="//hui.hixme.com/typography">Text Link</Text>`}
        </Highlight>
      </Col>
    </Row>
  </Grid>
)

export default TextDocs
