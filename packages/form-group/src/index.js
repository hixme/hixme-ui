import React, { Component } from 'react'
import PropTypes from 'prop-types'
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

FormGroup.displayName = 'hui:FormGroup`
FormGroup.huiName = 'FormGroup'

FormGroup.propTypes = {
  children: PropTypes.any.isRequired,
}

export default FormGroup
