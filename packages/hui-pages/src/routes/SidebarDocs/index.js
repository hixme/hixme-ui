import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Grid, Row, Col } from 'react-flexbox-grid'

import Button from '@hixme-ui/button'
import Container from '@hixme-ui/container'
import Sidebar from '@hixme-ui/sidebar'

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
        </Grid>
      </div>
    )
  }
}

export default SidebarDocs
