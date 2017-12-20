import styled from 'styled-components'

import { getFontFamily } from '@hixme-ui/theme-props'

/* eslint-disable max-len */
const Table = styled.table`
  width: 100%;
  font-family: 'Avenir-Next_Demi', 'HelveticaNeue-Medium', 'Helvetica Neue Medium', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif;
  border-collapse: collapse;

  thead {
    tr {
      background-color: #f2f6f9;
      border-radius: 6px;
      border-color: transparent;
    }

    th {
      color: #8f9da8;
      font-size: 14px;
      font-weight: 400;
      letter-spacing: -0.32px;
      line-height: 19px;
      vertical-align: top;

      &:first-child {
        border-top-left-radius: 6px;
        border-bottom-left-radius: 6px;
      }

      &:last-child {
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px;
      }
    }
  }

  tbody {
    tr {
      &:nth-child(even) {
        background-color: ${props => (props.striped ? '#f2f6f9' : 'white')};
      }

      &:nth-child(odd) {
        background-color: white;
      }
    }
  }

  th, td {
    padding: 15px;
    height: 46px;
  }

  td {
    color: #3a4951;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: -0.1px;
    line-height: 16px;
  }

  tr {
    background-color: white;
    border-bottom: 1px solid #DBE2E8;
  }
`

export default Table
