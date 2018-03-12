import React from 'react'
import PropTypes from 'prop-types'

import StyledTable from './StyledTable'
import OverflowContainer from './OverflowContainer'

const Table = ({
  children,
  striped,
  alignBody,
  alignHeader,
}) => (
  <OverflowContainer>
    <StyledTable striped={striped} alignBody={alignBody} alignHeader={alignHeader}>
      {children}
    </StyledTable>
  </OverflowContainer>
)

Table.propTypes = {
  children: PropTypes.node,
  striped: PropTypes.bool,
  alignBody: PropTypes.string,
  alignHeader: PropTypes.string,
}

Table.defaultProps = {
  children: null,
  striped: false,
  alignBody: '',
  alignHeader: '',
}

Table.huiName = 'Table'
Table.displayName = 'Table'

export default Table
