import styled from 'styled-components'

const StyledCheckbox = styled.input`
  position: fixed;
  left: -9999px;
  top: -9999px;
  &:checked ~ {
    &:after {
      opacity: 1 !important;
    }
  }
  &:focus ~ {
    outline: none;
    border-color: #2fb699;
    box-shadow: 0 0 10px #2fb699;
  }
`

export default StyledCheckbox
