import styled from 'styled-components'

const FormGroup = styled.div`
  padding: 13px 0px;
  > label {
    display: inline-block;
    margin-bottom:7px;
    margin-left: 2px;
  }
  > button {
    display: block;
    width: 100%;
  }
`

FormGroup.displayName = 'hui:FormGroup'
FormGroup.huiName = 'FormGroup'

export default FormGroup
