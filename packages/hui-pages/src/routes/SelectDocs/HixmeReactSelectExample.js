import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { HixmeReactSelect } from '@hixme-ui/select'

class HixmeReactSelectExample extends Component {
  static propTypes = {
    value: PropTypes.string,
  }

  static defaultProps = {
    value: '',
    onChange: () => null,
  }

  state = { value: this.props.value }
  handleOnChange = (value) => {
    this.setState({ value })
  }
  render() {
    const { value } = this.state
    return (
      <HixmeReactSelect
        multi
        onChange={this.handleOnChange}
        value={value}
        options={[
          { value: 1, label: 'You' },
          { value: 2, label: 'were' },
          { value: 3, label: 'my' },
          { value: 4, label: 'brother' },
          { value: 5, label: 'Anakin' },
        ]}
      />
    )
  }
}

export default HixmeReactSelectExample
