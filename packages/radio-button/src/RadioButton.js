import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { LabelBase } from '@hixme-ui/text'

const RadioInput = styled.input`
  position: fixed;
    left: -9999px;
    top: -9999px;
    &:checked ~ {
      .hui-radioDisplay {
        &:after {
          opacity: 1;
        }
      }
    }
    &:focus ~ {
      .hui-radioDisplay {
        outline: none;
        border-color: #2fb699;
        box-shadow: 0 0 10px #2fb699;
      }
    }
`

const RadioText = LabelBase.extend`
  cursor: pointer;
  display: inline-block;
  font-weight: 500;
  font: 500 16px/18px;
  color: #4a5b64;
  margin: 0 0 0 16px;
  max-width: calc(100% - 46px);
  vertical-align: top;
`

const RadioDisplay = styled.span`
  cursor: pointer;
  border-radius: 50%;
  border: 1px solid #b9c5cd;
  width: 18px;
  height: 18px;
  display: inline-block;
  position: relative;
  background: $white;
  font-size: 0;
  line-height: 0;
  vertical-align: top;
  &:after {
    position: absolute;
    left: 2px;
    top: 2px;
    right: 2px;
    bottom: 2px;
    border-radius: 50%;
    background: #2eae8f;
    content: " ";
    opacity: 0;
    z-index: 2;
    transition: all .1s ease-in-out;
  }
`
export function radioId({
  name = 'n',
  text = 't',
  value = 'v',
}) {
  return `hui:rb-${name.toString()}-${text.toString()}-${value.toString()}`
}

const RadioButton = (props) => {
  const { text, name, ...restProps } = props

  return (
    <label htmlFor={radioId(props)}>
      <RadioInput name={props.name} type='radio' {...restProps} id={radioId(props)} />
      <RadioDisplay className='hui-radioDisplay' />
      {props.text && <RadioText htmlFor={radioId(props)}>{text}</RadioText>}
    </label>
  )
}

RadioButton.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default RadioButton

