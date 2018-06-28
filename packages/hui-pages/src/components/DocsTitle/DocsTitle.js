import React from 'react'
import PropTypes from 'prop-types'

import Separator from '@hixme-ui/separator'
import Title from '@hixme-ui/title'
import Container from '@hixme-ui/container'

import GithubComponentLink from '../GithubComponentLink'

const DocsTitle = ({
  title,
  subtitle,
}) => (
  <Container flex noPadding direction='column' marginBottom='15px'>
    <Container flex noPadding justifyContent='space-between' alignItems='center'>
      <Title bold>{title}</Title>
      <GithubComponentLink />
    </Container>
    <Title smaller thin>{subtitle}</Title>
    <Separator size='1px' />
  </Container>
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
