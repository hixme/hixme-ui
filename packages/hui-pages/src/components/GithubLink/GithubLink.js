import React from 'react'
import githubIcon from './github-icon.png'

const GithubLink = props => console.log(props) || (
  <a href='https://github.com/hixme/hixme-ui'>
    View on Github
  </a>
)

GithubLink.displayName = 'GithubLink'

export default GithubLink
