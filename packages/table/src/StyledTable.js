import styled from 'styled-components'

/* eslint-disable max-len */
const StyledTable = styled.table`
  width: 100%;
  min-width: 350px;
  border-collapse: collapse;

  thead {
    text-align: ${({ alignHeader }) => alignHeader || 'center'};
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
      ${({ compact }) => !compact && 'vertical-align: top;'}

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
    text-align: ${({ alignBody }) => alignBody || 'left'};
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
    padding: ${({ compact }) => (compact ? '0 15px' : '15px')};
    height: ${({ compact }) => (compact ? '32px' : '46px')};
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

export default StyledTable
