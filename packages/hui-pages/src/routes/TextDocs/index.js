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
        <Title small margin='0px 0px 20px'>Boolean Props</Title>
      </Col>
    </Row>
    <Row
      style={{
        borderBottom: '1px solid black',
        marginBottom: '10px',
      }}
    >
      <Col xs={2}>
        <Title smallest>Size</Title>
      </Col>
      <Col xs={2}>
        <Title smallest>Weight</Title>
      </Col>
      <Col xs={2}>
        <Title smallest>State</Title>
      </Col>
      <Col xs={2}>
        <Title smallest>Color</Title>
      </Col>
      <Col xs={2}>
        <Title smallest>Tag</Title>
      </Col>
      <Col xs={2}>
        <Title smallest>Transform</Title>
      </Col>
    </Row>
    <Row>
      <Col xs={2}>
        <Text smallest>smallest</Text>
        <br />
        <Text smaller>smaller</Text>
        <br />
        <Text small>small</Text>
        <br />
        <Text default>default</Text>
        <br />
        <Text medium>medium</Text>
        <br />
        <Text large>large</Text>
        <br />
        <Text larger>larger</Text>
        <br />
        <Text jumbo>jumbo</Text>
      </Col>
      <Col xs={2}>
        <Text thinnest>thinnest</Text>
        <br />
        <Text thinner>thinner</Text>
        <br />
        <Text thin>thin</Text>
        <br />
        <Text normal>normal</Text>
        <br />
        <Text bolder>bolder</Text>
        <br />
        <Text boldest>boldest</Text>
      </Col>
      <Col xs={2}>
        <Text defaultColor>defaultColor</Text>
        <br />
        <Text primary>primary</Text>
        <br />
        <Text warning>warning</Text>
        <br />
        <Text error>error</Text>
        <br />
        <Text danger>danger</Text>
        <br />
        <Text muted>muted</Text>
      </Col>
      <Col xs={2}>
        <Text white style={{ background: 'black' }}>white</Text>
        <br />
        <Text black>black</Text>
        <br />
        <Text blue>blue</Text>
        <br />
        <Text green>green</Text>
        <br />
        <Text purple>purple</Text>
        <br />
        <Text red>red</Text>
        <br />
        <Text yellow>yellow</Text>
        <br />
        <Text light>light</Text>
        <br />
        <Text lighter>lighter</Text>
      </Col>
      <Col xs={2}>
        <Text>a</Text>
        <br />
        <Text>label</Text>
        <br />
        <Text>p</Text>
        <br />
        <Text>div</Text>
      </Col>
      <Col xs={2}>
        <Text>capitalize</Text>
        <br />
        <Text>lowercase</Text>
        <br />
        <Text>uppercase</Text>
      </Col>
    </Row>

    <Row>
      <Col xs={12}>
        <Title small margin='50px 0px 20px'>String Props</Title>
      </Col>
    </Row>
    <Row
      style={{
        borderBottom: '1px solid black',
        marginBottom: '10px',
      }}
    >
      <Col xs={3}>
        <Title smallest>Named CSS Prop</Title>
      </Col>
      <Col sm={3} />
    </Row>

    <Row>
      <Col xs={3}>
        <Text>color</Text>
        <br />
        <Text>cursor</Text>
        <br />
        <Text>display</Text>
        <br />
        <Text>fontFamily</Text>
        <br />
        <Text>fontSize</Text>
        <br />
        <Text>fontWeight</Text>
        <br />
        <Text>href</Text>
        <br />
        <Text>justifyContent</Text>
        <br />
      </Col>
      <Col xs={3}>
        <Text>lineHeight</Text>
        <br />
        <Text>onClick</Text>
        <br />
        <Text>textIndent</Text>
        <br />
        <Text>textOverflow</Text>
        <br />
        <Text>userSelect</Text>
        <br />
        <Text>whiteSpace</Text>
        <br />
        <Text>wordBreak</Text>
      </Col>
    </Row>

    <Row>
      <Col xs={12}>
        <Title small margin='50px 0px 20px'>Examples</Title>
      </Col>
    </Row>
    <Row center='sm' start='xs' middle='xs'>
      <Col xs={12} sm={4}>
        <Text primary>Primary text</Text>
      </Col>
      <Col xs={12} sm={8}>
        <Code>
          {'<Text primary>Primary text</Text>'}
        </Code>
      </Col>
      <Col xs={12} sm={4}>
        <Text warning>Warning text</Text>
      </Col>
      <Col xs={12} sm={8}>
        <Code>
          {'<Text warning>Warning text</Text>'}
        </Code>
      </Col>
      <Col xs={12} sm={4}>
        <Text error>Error text</Text>
      </Col>
      <Col xs={12} sm={8}>
        <Code>
          {'<Text error>Error text</Text>'}
        </Code>
      </Col>
      <Col xs={12} sm={4}>
        <Text label>Label</Text>
      </Col>
      <Col xs={12} sm={8}>
        <Code>
          {'<Text label>Name</Text>'}
        </Code>
      </Col>
      <Col xs={12} sm={4}>
        <Text a primary href='//hui.hixme.com/typography'>Text Link</Text>
      </Col>
      <Col xs={12} sm={8}>
        <Code>
          {'<Text a primary href="//hui.hixme.com/typography">Text Link</Text>'}
        </Code>
      </Col>
    </Row>
    <Row center='sm' start='xs' middle='xs'>
      <Col xs='12'>
        <Title smaller margin='40px 0 20px 0'>Font Sizes</Title>
      </Col>
    </Row>
    <Row center='sm' start='xs' middle='xs'>
      <Col xs={12} sm={4}>
        <Text large>Large</Text>
      </Col>
      <Col xs={12} sm={8}>
        <Code>
          {'<Text large>Large</Text>'}
        </Code>
      </Col>
    </Row>
    <Row center='sm' start='xs' middle='xs'>
      <Col xs={12} sm={4}>
        <Text medium>Medium</Text>
      </Col>
      <Col xs={12} sm={8}>
        <Code>
          {'<Text medium>Medium</Text>'}
        </Code>
      </Col>
    </Row>
    <Row center='sm' start='xs' middle='xs'>
      <Col xs={12} sm={4}>
        <Text small>Small</Text>
      </Col>
      <Col xs={12} sm={8}>
        <Code>
          {'<Text small>Small</Text>'}
        </Code>
      </Col>
    </Row>
    <Row center='sm' start='xs' middle='xs'>
      <Col xs={12} sm={4}>
        <Text smaller>Smaller</Text>
      </Col>
      <Col xs={12} sm={8}>
        <Code>
          {'<Text smaller>Smaller</Text>'}
        </Code>
      </Col>
    </Row>
    <Row center='sm' start='xs' middle='xs'>
      <Col xs={12} sm={4}>
        <Text smallest>Smallest</Text>
      </Col>
      <Col xs={12} sm={8}>
        <Code>
          {'<Text smallest>Smallest</Text>'}
        </Code>
      </Col>
    </Row>
    <Row center='xs'>
      <Col xs={12} sm={6}>
        <Title smaller style={{ margin: '40px 0 20px 0' }}>Font Sizes</Title>
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
      </Col>
    </Row>
  </Grid>
)

export default TextDocs
