import React from 'react'
import { withRouter } from 'react-router-dom'
import { Grid, Row, Col } from 'react-flexbox-grid'

import Text from '@hixme-ui/text'

const DocsHeader = ({
  history
}) => {
  return (
    <Grid fluid style={{ padding: '0' }}>
      <Row style={{ margin: '20px 0 30px 0' }}>
        <Col>
          <Text a light cursor='pointer' onClick={history.goBack}>
            {'< Back to Home'}
          </Text>
        </Col>
      </Row>
    </Grid>
  )
}

DocsHeader.displayName = 'DocsHeader'
export default withRouter(DocsHeader)
