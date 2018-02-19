import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'

import Text from '@hixme-ui/text'
import Title from '@hixme-ui/title'

import Code from 'components/Code'
import Nav from 'components/Nav'
import CategoryHeader from 'components/CategoryHeader'

import Logo from '../../assets/logo.png'

const textProps = {
  p: true,
  thin: true,
  medium: true,
}

const App = () => (
  <Grid fluid>
    <div style={{ width: '100%', textAlign: 'center' }}>
      <img src={Logo} alt='hixme logo' style={{ margin: '50px 0 70px', padding: '0 20px' }} />
    </div>
    <Row center='xs' style={{ marginBottom: '20px' }}>
      <Col style={{ marginRight: '2px' }}>
        <a href='https://lernajs.io/'>
          <img src='https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg' alt='lerna badge' />
        </a>
      </Col>
      <Col style={{ marginLeft: '2px' }}>
        <a href='https://travis-ci.org/hixme/hixme-ui'>
          <img src='https://travis-ci.org/hixme/hixme-ui.svg?branch=master' alt='travis build badge' />
        </a>
      </Col>
    </Row>
    <CategoryHeader title='Welcome to the Hixme UI!' />
    <Row>
      <Col xs>
        <Text {...textProps}>
          The hixme-ui, or HUI, is a component library that supports each of
          {' '}
          <Text a href='https://hixme.com/' bold>{"Hixme's"}</Text> applications. Instead of using standard
          front end frameworks, {"we've"} opted to create our own component library
          from scratch to provide flexibility and reusability. This library allows us to avoid applying styles on top of
          another framework, and instead focus on creating only the components that are required for our applications.
        </Text>
      </Col>
    </Row>
    <CategoryHeader title='Getting started' />
    <Row>
      <Col xs>
        <Text {...textProps}>
          Install the theme and your needed components.
        </Text>
      </Col>
    </Row>
    <Row>
      <Code language='bash'>
        {'npm install --save @hixme-ui/theme @hixme-ui/container @hixme-ui/title'}
      </Code>
    </Row>
    <Text {...textProps}>
      Add the theme via the theme provider and begin using HUI components
    </Text>
    <Code>
      {`import { ThemeProvider } from '@hixme-ui/theme'
import Container from '@hixme-ui/container'
import Title from '@hixme-ui/title'

const AppContainer = () => (
  <ThemeProvider>
    <Container padding='10px'>
      <Title small jumbo primary>Welcome to your App</Title>

      <Container background='#efefef'>
        This is going to be a fun ride
      </Container>
    </Container>
  </ThemeProvider>
)`}
    </Code>
    <CategoryHeader title='Contribution' />
    <Row>
      <Col xs>
        <Text {...textProps}>
          We are continuously adding to the HUI. If you wish to contribute, you can find the hixme-ui repository on
          {' '}
          <Text a href='https://github.com/hixme/hixme-ui' bold>Github</Text>.
        </Text>
      </Col>
    </Row>
    <CategoryHeader title='Built With' />
    <Row>
      <Col xs={12}>
        <Text thin large>
          <Text a href='https://reactjs.org/' bold>React</Text>
          {' '}
          - A Javascript framework
        </Text>
      </Col>
      <Col xs={12}>
        <Text thin large>
          <Text a href='https://www.styled-components.com' bold>Styled Components</Text>
          {' '}
          - CSS management
        </Text>
      </Col>
      <Col xs={12}>
        <Text thin large>
          <Text a href='https://facebook.github.io/jest/' bold>Jest</Text>
          {' '}
          - Testing framework
        </Text>
      </Col>
    </Row>
    <CategoryHeader title='HUI Components' />
    <Nav />
  </Grid>
)

export default App
