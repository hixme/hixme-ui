import React from 'react'
import PropTypes from 'prop-types'

import Container from '@hixme-ui/container'
import Separator from '@hixme-ui/separator'
import Title from '@hixme-ui/title'

const CategoryHeader = ({ title }) => (
  <Container noPadding margin='50px 0 20px 0'>
    <Title small>{title}</Title>
    <Separator size='1px' />
  </Container>
)

CategoryHeader.propTypes = {
  title: PropTypes.string,
}
CategoryHeader.defaultProps = {
  title: '',
}
CategoryHeader.displayName = 'CategoryHeader'

export default CategoryHeader
