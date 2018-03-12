import styled, { keyframes } from 'styled-components'

const rotate360 = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`

const Spinner = styled.span`
  display: ${({ animate }) => (animate ? 'inline-flex' : 'none')};
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  animation-name: ${rotate360};
  animation-timing-function: ${({ ease }) => (ease ? 'ease' : 'linear')};
  animation-iteration-count: infinite;
  animation-duration: ${({ duration }) => (duration || '1s')};
`

Spinner.displayName = 'hui:Spinner'
Spinner.huiName = 'Spinner'

export default Spinner
