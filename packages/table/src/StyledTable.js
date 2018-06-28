import styled from 'styled-components'

import { getBackgroundColor } from '@hixme-ui/theme-props'

/* eslint-disable max-len */
const StyledTable = styled.table`
  width: 100%;
  min-width: 350px;
  border-collapse: collapse;

  thead {
    text-align: ${({ alignHeader }) => alignHeader || 'left'};
    tr {
      background-color: ${props => getBackgroundColor(props)};
      border-color: transparent;
      color: white;
    }

    th {
      font-weight: 400;
      ${({ compact }) => !compact && 'vertical-align: top;'}

      &:first-child {
        border-radius: 2px 0 0;
      }

      &:last-child {
        border-radius: 0 2px 0 0;
      }
    }
  }

  tbody {
    text-align: ${({ alignBody }) => alignBody || 'left'};
    tr {
      &:nth-child(even) {
        background-color: ${props => (props.striped ? 'WhiteSmoke' : 'white')};
      }

      &:nth-child(odd) {
        background-color: white;
      }
    }
  }

  th, td {
    padding: ${({ compact }) => (compact ? '0 15px' : '15px')};
    height: ${({ compact }) => (compact ? '32px' : '46px')};
  }

  td {
    color: #3a4951;
  }

  tr {
    background-color: white;
    border-bottom: 1px solid #DBE2E8;
  }
`

export default StyledTable
