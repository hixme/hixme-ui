import React from 'react'
import { withRouter } from 'react-router-dom'
import Text from '@hixme-ui/text'

import { componentURL } from '../../modules/github-utils'

const GithubLink = withRouter(({ location }) => (
  <Text href={componentURL(location.pathname.replace('/', ''))} cursor='pointer'>
    View on Github
  </Text>
))

GithubLink.displayName = 'GithubLink'

export default GithubLink
