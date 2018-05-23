import styled, { keyframes } from 'styled-components'

const animateGradient = keyframes`
  0% {
    background-position: 0% 15%
  }
  50% {
    background-position: 100% 85%
  }
  100% {
    background-position: 0% 15%
  }
`

const Placeholder = styled.div`
  background: linear-gradient(90deg, #e7e7e7, white);
  background-size: 200% 400%;
  animation: 1.5s ${animateGradient} infinite;
  width: ${props => props.width};
  height: ${props => props.height};
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  border-radius: 4px;
`

export default Placeholder
