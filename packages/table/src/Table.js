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
  overflow,
  ...rest
}) => (
  <div>
    {overflow ? (
      <OverflowContainer>
        <StyledTable
          compact={compact}
          striped={striped}
          alignBody={alignBody}
          alignHeader={alignHeader}
          {...rest}
        >
          {children}
        </StyledTable>
      </OverflowContainer>
    ) : (
      <StyledTable
        compact={compact}
        striped={striped}
        alignBody={alignBody}
        alignHeader={alignHeader}
        {...rest}
      >
        {children}
      </StyledTable>
    )}
  </div>
)

Table.propTypes = {
  alignBody: PropTypes.string,
  alignHeader: PropTypes.string,
  children: PropTypes.node,
  compact: PropTypes.bool,
  striped: PropTypes.bool,
  overflow: PropTypes.bool,
}

Table.defaultProps = {
  alignBody: '',
  alignHeader: '',
  children: null,
  compact: false,
  striped: false,
  overflow: true,
}

Table.huiName = 'Table'
Table.displayName = 'Table'

export default Table
