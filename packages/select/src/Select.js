import React from 'react'
import PropTypes from 'prop-types'
import SelectBase from './SelectBase'

const Select = ({
  list,
  children,
  placeholder,
  ...props
}) => (
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

Select.displayName = 'hui:Select'
Select.huiName = 'Select'

Select.propTypes = {
  children: PropTypes.any,
  list: PropTypes.array,
  placeholder: PropTypes.string,
}

Select.defaultProps = {
  children: null,
  list: undefined,
  placeholder: null,
}

export default Select
