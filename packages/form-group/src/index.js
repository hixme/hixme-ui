import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Text from '@hixme-ui/text'
import Label from '@hixme-ui/label'

export const FormGroupBase = styled.div`
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
const FormGroup = ({
  children,
  label,
  error,
}) => (
  <FormGroupBase>
    {label && <Label>{label}</Label>}
    {children}
    {error && <Text error>{error}</Text>}
  </FormGroupBase>
)

FormGroup.propTypes = {
  children: PropTypes.node.isRequired,
  label: PropTypes.string,
  error: PropTypes.string,
}

FormGroup.defaultProps = {
  label: null,
  error: null,
}

FormGroup.displayName = 'hui:FormGroup'
FormGroup.huiName = 'FormGroup'

export default FormGroup
