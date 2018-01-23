import styled from 'styled-components'

const Disabled = styled.div`
  ${props => props.disabled &&
    `opacity: 0.4;
     position: relative;
     cursor: not-allowed;

     &:before {
       content: '';
       width: 100%;
       height: 100%;
       display: block;
       position: absolute;
     }`
  }
`

Disabled.displayName = 'Disabled'

export default Disabled
