import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

// hixme-ui
import Spinner from '@hixme-ui/spinner'
import Icon from '@hixme-ui/icon'

import SelectBase from './SelectBase'

export const SpinnerContainer = styled.span`
  position: absolute;
  top: 12px;
  right: 26px;
  cursor: not-allowed;
`

const Select = ({
  list,
  children,
  placeholder,
  loading,
  ...props
}) => {
  if (loading) {
    return (
      <div style={{ position: 'relative' }}>
        <SelectBase {...props} placeholder={placeholder} disabled>
          {placeholder && <option disabled value=''>{placeholder}</option>}
          {list && list.map(item => (
            <option
              key={`hui:select-${item.name}-${item.id}`}
              value={item.id}
            >
              {item.name}
            </option>
          ))}
          {!list && children}
        </SelectBase>
        <SpinnerContainer>
          <Spinner animate duration='2s'>
            <Icon cog lighter size={1.2} />
          </Spinner>
        </SpinnerContainer>
      </div>
    )
  }

  return (
    <SelectBase {...props} placeholder={placeholder}>
      {placeholder && <option disabled value=''>{placeholder}</option>}
      {list && list.map(item => (
        <option
          key={`hui:select-${item.name}-${item.id}`}
          value={item.id}
        >
          {item.name}
        </option>
      ))}
      {!list && children}
    </SelectBase>
  )
}

Select.displayName = 'hui:Select'
Select.huiName = 'Select'

Select.propTypes = {
  children: PropTypes.any,
  loading: PropTypes.bool,
  list: PropTypes.array,
  placeholder: PropTypes.string,
}

Select.defaultProps = {
  children: null,
  list: undefined,
  loading: false,
  placeholder: null,
}

export default Select
