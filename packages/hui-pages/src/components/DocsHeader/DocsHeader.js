import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { Link } from 'react-router-dom'

import Text from '@hixme-ui/text'

const DocsHeader = () => (
  <Grid fluid style={{ padding: '0' }}>
    <Row style={{ margin: '20px 0 30px 0' }}>
      <Col>
        <Link to='/'>
          <Text light>
            {'< Back to Home'}
          </Text>
        </Link>
      </Col>
    </Row>
  </Grid>
)

DocsHeader.displayName = 'DocsHeader'
export default DocsHeader
