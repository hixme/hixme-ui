import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'

import Table from '@hixme-ui/table'
import Toggle from '@hixme-ui/toggle'
import Title from '@hixme-ui/title'

import { Code, DocsTitle } from '../../components'

class ToggleDocs extends React.Component {
  state = { checked: false }

  handleToggle(e) {
    this.setState({ checked: e.target.checked })
  }

  render() {
    return (
      <Grid fluid>
        <DocsTitle
          title='Toggle'
          subtitle='A hixme-ui styled toggle component'
        />
        <Row center='xs' style={{ marginBottom: '20px' }}>
          <Col xs={12}>
            <Toggle
              checked={this.state.checked}
              truthyText='Ya'
              falsyText='Nah'
              onChange={e => this.handleToggle(e)}
            />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Code>
              {`import Toggle from '@hixme-ui/toggle'

<Toggle
  checked={this.state.checked}
  truthyText='Ya'
  falsyText='Nah'
  onChange={e => this.handleToggle(e)}
/>`}
            </Code>
          </Col>
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
                  <td>checked</td>
                  <td>boolean</td>
                  <td>undefined</td>
                  <td>Controls toggle state</td>
                </tr>
                <tr>
                  <td>truthyText</td>
                  <td>string</td>
                  <td>&apos;Yes&apos;</td>
                  <td>Label shown when toggle is true</td>
                </tr>
                <tr>
                  <td>falsyText</td>
                  <td>string</td>
                  <td>&apos;No&apos;</td>
                  <td>Label shown when toggle is false</td>
                </tr>
                <tr>
                  <td>noLabels</td>
                  <td>boolean</td>
                  <td>false</td>
                  <td>Hide labels</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default ToggleDocs
