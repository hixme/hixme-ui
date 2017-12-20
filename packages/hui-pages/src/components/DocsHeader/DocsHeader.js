import React from 'react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Grid, Row, Col } from 'react-flexbox-grid'

import Text from '@hixme-ui/text'

const DocsHeader = ({
  history
}) => {
  return (
    <Grid fluid>
      <Row style={{ margin: '20px 0 40px 0' }}>
        <Col>
          <Text light cursor='pointer' onClick={history.goBack}>{'< Back to Home'}</Text>
        </Col>
      </Row>
    </Grid>
  )
}

DocsHeader.displayName = 'DocsHeader'
export default withRouter(DocsHeader)
