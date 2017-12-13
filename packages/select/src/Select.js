import React from 'react'
import PropTypes from 'prop-types'
import SelectBase from './SelectBase'

const Select = ({ list, ...props }) => (
  <SelectBase {...props}>
    {list && list.map(item =>
      <option
        key={`hui:select-${item.name}-${item.id}`}
        value={item.id}
      >{item.name}
      </option>)
    }
  </SelectBase>
)

Select.displayName = 'hui:Select'
Select.huiName = 'Select'

Select.propTypes = {
  list: PropTypes.array,
}

Select.defaultProps = {
  list: [],
}

export default Select
