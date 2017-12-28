import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Row, Col } from 'react-flexbox-grid'

import Text from '@hixme-ui/text'
import Title from '@hixme-ui/title'

const DocsTitle = ({
  title,
  subtitle,
}) => (
  <Grid fluid>
    <Row center='xs'>
      <Title>{title}</Title>
    </Row>
    <Row center='xs' style={{ marginBottom: '20px' }}>
      <Col xs={12} sm={8}>
        <Text p thin>{subtitle}</Text>
      </Col>
    </Row>
  </Grid>
)

DocsTitle.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
}

DocsTitle.defaultProps = {
  title: '',
  subtitle: '',
}

DocsTitle.displayName = 'DocsTitle'

export default DocsTitle
