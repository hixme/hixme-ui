import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { Link } from 'react-router-dom'

import Text from '@hixme-ui/text'

const DocsHeader = ({ location }) => (
  <Grid fluid style={{ padding: '0' }}>
    {location.pathname !== '/' &&
      <Row style={{ margin: '20px 0 30px 0' }}>
        <Col>
          <Link to='/'>
            <Text light cursor='pointer'>
              {'< Back to Home'}
            </Text>
          </Link>
        </Col>
      </Row>
    }
  </Grid>
)

DocsHeader.propTypes = {
  location: PropTypes.object,
}

DocsHeader.defaultProps = {
  location: {},
}

DocsHeader.displayName = 'DocsHeader'
export default withRouter(DocsHeader)
