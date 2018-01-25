import React from 'react'
import styled from 'styled-components'
import { Grid, Row, Col } from 'react-flexbox-grid'

import Animate from '@hixme-ui/animate'
import Table from '@hixme-ui/table'
import Text from '@hixme-ui/text'
import Title from '@hixme-ui/title'
import theme from '@hixme-ui/theme'

import { Code, DocsTitle } from '../../components'

const Square = styled.div`
  width: 50px;
  height: 50px;
  background-color: ${theme.colors.primary};
`

const AnimateDocs = () => (
  <div>
    <DocsTitle
      title='Animate'
      subtitle='Animate.css React helper component'
    />
    <Grid fluid>
      <Row center='xs' style={{ margin: '60px 0 40px 0' }}>
        <Col xs>
          <Animate trigger delay='1s' count='4' display='inline-block'>
            <Square />
          </Animate>
        </Col>
      </Row>
      <Row center='xs'>
        <Code>
          {`<Animate trigger delay='1s' count='4'>
  <Square />
</Animate>`}
        </Code>
      </Row>
      <Row style={{ marginTop: '40px' }}>
        <Text p thin>
          The Animate component pulls in the entire
          {' '}
          <Text bold primary href='https://daneden.github.io/animate.css/' cursor='pointer'>
            Animate.css
          </Text> library and gives you an easy way to interact with it
          in React. All animations available there are available here.
        </Text>
        <Text p thin>
          Different animation styles are added as camelCase boolean props. For example:
        </Text>
      </Row>
      <Row center='xs' style={{ margin: '20px 0 40px 0' }}>
        <Col xs>
          <Animate rubberBand trigger delay='7s' display='inline-block'>
            <Square />
          </Animate>
        </Col>
      </Row>
      <Row center='xs'>
        <Code>
          {`<Animate rubberBand trigger delay='7s'>
  <Square />
</Animate>`}
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
                <td>[Animate.css animation name]</td>
                <td>bool</td>
                <td>bounce = true</td>
                <td>Animation style</td>
              </tr>
              <tr>
                <td>time</td>
                <td>string</td>
                <td>{"'1s'"}</td>
                <td>Time it takes for the animating to run</td>
              </tr>
              <tr>
                <td>delay</td>
                <td>string</td>
                <td>{"'0s'"}</td>
                <td>Time delay before the animation begins to run</td>
              </tr>
              <tr>
                <td>count</td>
                <td>string</td>
                <td>{"'1s'"}</td>
                <td>Number of times the animation will run</td>
              </tr>
              <tr>
                <td>trigger</td>
                <td>bool</td>
                <td>false</td>
                <td>Play/paused state of the animation</td>
              </tr>
              <tr>
                <td>display</td>
                <td>string</td>
                <td>{"'inherit'"}</td>
                <td>CSS display property</td>
              </tr>
              <tr>
                <td>fillMode</td>
                <td>string</td>
                <td>{"'none'"}</td>
                <td>Specifies a style for the element when the animation is not playing</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Grid>
  </div>
)

export default AnimateDocs

