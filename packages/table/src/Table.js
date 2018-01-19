import React from 'react'
import PropTypes from 'prop-types'

import StyledTable from './StyledTable'
import OverflowContainer from './OverflowContainer'

const Table = ({
  children,
  striped,
}) => (
  <OverflowContainer>
    <StyledTable striped={striped}>
      {children}
    </StyledTable>
  </OverflowContainer>
)

Table.propTypes = {
  children: PropTypes.node,
  striped: PropTypes.bool,
}

Table.defaultProps = {
  children: null,
  striped: false,
}

Table.huiName = 'Table'
Table.displayName = 'Table'

export default Table
