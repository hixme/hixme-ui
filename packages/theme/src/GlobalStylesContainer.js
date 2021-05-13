/* eslint-disable no-unused-expressions, max-len */
import React from 'react'
import PropTypes from 'prop-types'
import { injectGlobal } from 'styled-components'

export default class GlobalStylesContainer extends React.Component {
  componentWillMount() {
    injectGlobal`
@import '~normalize.css/normalize';

@font-face {
  font-family: "SF Pro Text";
  src: url('fonts/SFProText/SFProText-SemiboldItalic.eot');
  src: url('fonts/SFProText/SFProText-SemiboldItalic.eot?#iefix') format("embedded-opentype"), url('fonts/SFProText/SFProText-SemiboldItalic.woff2') format("woff2"), url('fonts/SFProText/SFProText-SemiboldItalic.woff') format("woff"), url('fonts/SFProText/SFProText-SemiboldItalic.ttf') format("truetype"), url('fonts/SFProText/SFProText-SemiboldItalic.svg#SFProText-SemiboldItalic') format("svg");
  font-weight: 600;
  font-style: italic;
}
@font-face {
  font-family: "SF Pro Text";
  src: url('fonts/SFProText/SFProText-HeavyItalic.eot');
  src: url('fonts/SFProText/SFProText-HeavyItalic.eot?#iefix') format("embedded-opentype"), url('fonts/SFProText/SFProText-HeavyItalic.woff2') format("woff2"), url('fonts/SFProText/SFProText-HeavyItalic.woff') format("woff"), url('fonts/SFProText/SFProText-HeavyItalic.ttf') format("truetype"), url('fonts/SFProText/SFProText-HeavyItalic.svg#SFProText-HeavyItalic') format("svg");
  font-weight: 900;
  font-style: italic;
}
@font-face {
  font-family: "SF Pro Text";
  src: url('fonts/SFProText/SFProText-RegularItalic.eot');
  src: url('fonts/SFProText/SFProText-RegularItalic.eot?#iefix') format("embedded-opentype"), url('fonts/SFProText/SFProText-RegularItalic.woff2') format("woff2"), url('fonts/SFProText/SFProText-RegularItalic.woff') format("woff"), url('fonts/SFProText/SFProText-RegularItalic.ttf') format("truetype"), url('fonts/SFProText/SFProText-RegularItalic.svg#SFProText-RegularItalic') format("svg");
  font-weight: normal;
  font-style: italic;
}
@font-face {
  font-family: "SF Pro Text";
  src: url('fonts/SFProText/SFProText-Bold.eot');
  src: url('fonts/SFProText/SFProText-Bold.eot?#iefix') format("embedded-opentype"), url('fonts/SFProText/SFProText-Bold.woff2') format("woff2"), url('fonts/SFProText/SFProText-Bold.woff') format("woff"), url('fonts/SFProText/SFProText-Bold.ttf') format("truetype"), url('fonts/SFProText/SFProText-Bold.svg#SFProText-Bold') format("svg");
  font-weight: bold;
  font-style: normal;
}
@font-face {
  font-family: "SF Pro Text";
  src: url('fonts/SFProText/SFProText-Medium.eot');
  src: url('fonts/SFProText/SFProText-Medium.eot?#iefix') format("embedded-opentype"), url('fonts/SFProText/SFProText-Medium.woff2') format("woff2"), url('fonts/SFProText/SFProText-Medium.woff') format("woff"), url('fonts/SFProText/SFProText-Medium.ttf') format("truetype"), url('fonts/SFProText/SFProText-Medium.svg#SFProText-Medium') format("svg");
  font-weight: 500;
  font-style: normal;
}
@font-face {
  font-family: "SF Pro Text";
  src: url('fonts/SFProText/SFProText-Heavy.eot');
  src: url('fonts/SFProText/SFProText-Heavy.eot?#iefix') format("embedded-opentype"), url('fonts/SFProText/SFProText-Heavy.woff2') format("woff2"), url('fonts/SFProText/SFProText-Heavy.woff') format("woff"), url('fonts/SFProText/SFProText-Heavy.ttf') format("truetype"), url('fonts/SFProText/SFProText-Heavy.svg#SFProText-Heavy') format("svg");
  font-weight: 900;
  font-style: normal;
}
@font-face {
  font-family: "SF Pro Text";
  src: url('fonts/SFProText/SFProText-Regular.eot');
  src: url('fonts/SFProText/SFProText-Regular.eot?#iefix') format("embedded-opentype"), url('fonts/SFProText/SFProText-Regular.woff2') format("woff2"), url('fonts/SFProText/SFProText-Regular.woff') format("woff"), url('fonts/SFProText/SFProText-Regular.ttf') format("truetype"), url('fonts/SFProText/SFProText-Regular.svg#SFProText-Regular') format("svg");
  font-weight: normal;
  font-style: normal;
}

html {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  font-family: "SF Pro Display", "Arial", "sans-serif";
  font-size: 14px;
  color: #3A4951;
  line-height: 1.42857143;
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

