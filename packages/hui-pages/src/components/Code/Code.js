import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import theme from '@hixme-ui/theme'

import SyntaxHighlighter from 'react-syntax-highlighter/prism'
import { hopscotch } from 'react-syntax-highlighter/styles/prism'

const StyledBorder = styled.div`
  border-radius: 5px;
  border: 1px ${theme.colors.lighter} solid;
  > pre {
    margin: 0 !important;
    border-radius: 3px;
  }
`

const Code = ({ children }) => (
  <StyledBorder>
    <SyntaxHighlighter language='jsx' style={hopscotch}>
      {children}
    </SyntaxHighlighter>
  </StyledBorder>
)

Code.propTypes = {
  children: PropTypes.node.isRequired,
}

Code.displayName = 'Code'

export default Code
