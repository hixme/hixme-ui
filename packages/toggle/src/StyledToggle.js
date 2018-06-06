import styled from 'styled-components'

const StyledToggle = styled.label`
  div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  input[type="checkbox"] {
    display: none;
    visibility: hidden;
  }

  input[type="checkbox"]:checked ~ #slider {
    background: #2eae8f;
    background-position: 75% 50%;
    background-repeat: no-repeat;
    // The Check icon
    ${({ withIcons }) => (withIcons && 'background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyB3aWR0aD0iMTJweCIgaGVpZ2h0PSI5cHgiIHZpZXdCb3g9IjAgMCAxMiA5IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPiAgICAgICAgPHRpdGxlPmNoZWNrbWFyazwvdGl0bGU+ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPiAgICA8ZGVmcz48L2RlZnM+ICAgIDxnIGlkPSJBZGQtTmV3LUVFLS0tRGVjLTIwMTYtVXBkYXRlcyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+ICAgICAgICA8ZyBpZD0iUHJvZmlsZS0tLUFkZC1uZXctZW1wbG95ZWUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05MjEuMDAwMDAwLCAtMTMwOS4wMDAwMDApIiBmaWxsPSIjRkZGRkZGIj4gICAgICAgICAgICA8ZyBpZD0iY2hlY2ttYXJrIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5MjEuMDAwMDAwLCAxMzA5LjAwMDAwMCkiPiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNC41MTE3NTc1Nyw1LjY5NDcwMTI5IEwyLjE5MTQ1MTczLDMuMzc0Mzk1NDYgQzEuNzIxMTA1NDQsMi45MDQwNDkxNiAwLjk2NDYzODc0NCwyLjkwNzM4MDQ0IDAuNDk2MDA5NTk0LDMuMzc2MDA5NTkgQzAuMDI0MTEzMjQ3MiwzLjg0NzkwNTk0IDAuMDI2NjU3NzY5Myw0LjYwMzcxNDA0IDAuNDk0Mzk1NDU2LDUuMDcxNDUxNzMgTDMuNTk5NTQ0ODYsOC4xNzY2MDExNCBDMy44NTI1MzEyOSw4LjQyOTU4NzU3IDQuMTg4Mjk0MzYsOC41NDU1MzU3NCA0LjUxNzUyMDI4LDguNTI1NzQ5NjMgQzQuODQ0NjcwOTIsOC41NDE2ODY1MiA1LjE3NjkxODU4LDguNDIzNjUyODMgNS40MjczNDQ3OSw4LjE3MzIyNjYyIEwxMS41MzMyMjY2LDIuMDY3MzQ0NzkgQzEyLjAwNjk5MzQsMS41OTM1NzgwMSAxMi4wMDM2MTYyLDAuODM3MTU3Mjg3IDExLjUzNDk4NywwLjM2ODUyODEzNyBDMTEuMDYzMDkwNywtMC4xMDMzNjgyMDkgMTAuMzA1NzcxNywtMC4wOTkzMTI4NjMyIDkuODM2MTcwMzUsMC4zNzAyODg1MTkgTDQuNTExNzU3NTcsNS42OTQ3MDEyOSBaIiBpZD0iQ29tYmluZWQtU2hhcGUiPjwvcGF0aD4gICAgICAgICAgICA8L2c+ICAgICAgICA8L2c+ICAgIDwvZz48L3N2Zz4=);') // eslint-disable-line
    }
  }

  input[type="checkbox"]:disabled ~ #slider {
    background: #bdcdd8; // greyed out on disabled
    background-position: 75% 50%;
    background-repeat: no-repeat;
  }

  input[type="checkbox"]:checked ~ #slider:before {
    left: 1px;
    box-shadow: 2px 0px 3px 1px rgba(0, 0, 0, 0.2);
  }
`

export default StyledToggle
