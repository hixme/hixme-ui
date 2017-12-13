import React from 'react'
import PropTypes from 'prop-types'
import SelectBase from './SelectBase'

const Select = ({
  list,
  children,
  ...props
}) => (
  <SelectBase {...props}>
    {list && list.map(item =>
      <option
        key={`hui:select-${item.name}-${item.id}`}
        value={item.id}
      >{item.name}
      </option>)
    }
    {!list && children}
  </SelectBase>
)

Select.displayName = 'hui:Select'
Select.huiName = 'Select'

Select.propTypes = {
  children: PropTypes.any,
  list: PropTypes.array,
}

Select.defaultProps = {
  children: null,
  list: undefined,
}

export default Select
