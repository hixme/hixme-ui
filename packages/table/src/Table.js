import React from 'react'
import PropTypes from 'prop-types'

import StyledTable from './StyledTable'
import OverflowContainer from './OverflowContainer'

const Table = ({
  children,
  striped,
  alignBody,
  alignHeader,
  compact,
}) => (
  <OverflowContainer>
    <StyledTable
      compact={compact}
      striped={striped}
      alignBody={alignBody}
      alignHeader={alignHeader}
    >
      {children}
    </StyledTable>
  </OverflowContainer>
)

Table.propTypes = {
  alignBody: PropTypes.string,
  alignHeader: PropTypes.string,
  children: PropTypes.node,
  compact: PropTypes.bool,
  striped: PropTypes.bool,
}

Table.defaultProps = {
  alignBody: '',
  alignHeader: '',
  children: null,
  compact: false,
  striped: false,
}

Table.huiName = 'Table'
Table.displayName = 'Table'

export default Table
