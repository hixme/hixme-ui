import React from 'react'
import PropTypes from 'prop-types'

import StyledTable from './StyledTable'
import OverflowContainer from './OverflowContainer'

const Table = ({ children }) => (
  <OverflowContainer>
    <StyledTable>
      {children}
    </StyledTable>
  </OverflowContainer>
)

Table.propTypes = {
  children: PropTypes.node,
}

Table.defaultProps = {
  children: null,
}

Table.huiName = 'Table'
Table.displayName = 'Table'

export default Table
