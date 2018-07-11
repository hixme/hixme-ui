import styled, { keyframes } from 'styled-components'

const animateGradient = keyframes`
  0% {
    background-position: 0% 25%
  }
  50% {
    background-position: 100% 65%
  }
  100% {
    background-position: 0% 25%
  }
`

const Placeholder = styled.div`
  background: linear-gradient(90deg,
    ${props => props.colorStop1 || '#e7e7e7'},
    ${props => props.colorStop2 || 'white'});
  background-size: 200% 400%;
  animation: 1.5s ${animateGradient} infinite;
  width: ${props => props.width || '200px'};
  height: ${props => props.height || '36px'};
  margin: ${props => props.margin || '20px'};
  padding: ${props => props.padding};
  border-radius: 4px;
`

export default Placeholder
