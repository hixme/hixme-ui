import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Grid, Row, Col } from 'react-flexbox-grid'

import Button from '@hixme-ui/button'
import Container from '@hixme-ui/container'
import Sidebar from '@hixme-ui/sidebar'
import Table from '@hixme-ui/table'
import Title from '@hixme-ui/title'

import { Code, DocsTitle } from '../../components'

class SidebarDocs extends Component {
  static propTypes = { open: PropTypes.bool }
  static defaultProps = { open: false }

  state = { open: this.props.open }

  render() {
    const { open } = this.state
    const toggleSidebar = () => {
      this.setState(prevState => ({
        open: !prevState.open,
      }))
    }

    return (
      <div>
        <DocsTitle
          title='Sidebar'
          subtitle='A simple sidebar component'
        />
        <Sidebar
          open={open}
          header='Header'
          onClose={toggleSidebar}
        >
          <Container>
            Content
          </Container>
        </Sidebar>
        <Grid fluid>
          <Row center='xs' middle='xs'>
            <Col xs={12}>
              <Button outline onClick={toggleSidebar}>Click to open</Button>
            </Col>
          </Row>
          <Row center='xs' middle='xs' style={{ marginTop: '30px' }}>
            <Col xs={6}>
              <Code>
                {`<Sidebar
  open={open}
  header='Header'
  onClose={toggleSidebar}
>
  <Container>
    Content
  </Container>
</Sidebar>`}
              </Code>
            </Col>
          </Row>
          <Row style={{ margin: '40px 0 20px 0' }}>
            <Title smaller>Props</Title>
          </Row>
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
                    <td>open</td>
                    <td>boolean</td>
                    <td>false</td>
                    <td>Open state of the sidebar</td>
                  </tr>
                  <tr>
                    <td>children</td>
                    <td>node</td>
                    <td>N/A</td>
                    <td>Sidebar content</td>
                  </tr>
                  <tr>
                    <td>header</td>
                    <td>string</td>
                    <td>N/A</td>
                    <td>Sidebar header</td>
                  </tr>
                  <tr>
                    <td>onClose</td>
                    <td>function</td>
                    <td>N/A</td>
                    <td>Function attached to close button</td>
                  </tr>
                  <tr>
                    <td>sidebarWidth</td>
                    <td>string</td>
                    <td>{"'300px'"}</td>
                    <td>Width of sidebar</td>
                  </tr>
                  <tr>
                    <td>style</td>
                    <td>object</td>
                    <td>N/A</td>
                    <td>Additional styles</td>
                  </tr>
                  <tr>
                    <td>topOffset</td>
                    <td>number</td>
                    <td>58</td>
                    <td>Number of pixels to offset the sidebar from the top of the page</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default SidebarDocs
