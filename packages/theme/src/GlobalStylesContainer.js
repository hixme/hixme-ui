/* eslint-disable no-unused-expressions, max-len */
import React from 'react'
import PropTypes from 'prop-types'
import { injectGlobal } from 'styled-components'

export default class GlobalStylesContainer extends React.Component {
  componentWillMount() {
    injectGlobal`
@import '~normalize.css/normalize';

html {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  font-family: -apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', Arial, sans-serif;
  font-size: 14px;
  color: #333333;
  line-height: 1.5;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

a {
  text-decoration: none;
}
    `
  }

  render() {
    return this.props.children
  }
}

GlobalStylesContainer.propTypes = {
  children: PropTypes.element.isRequired,
}
