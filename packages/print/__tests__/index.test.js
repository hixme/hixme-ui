import React from 'react'
import renderer from 'react-test-renderer'
import { ThemeProvider } from '@hixme-ui/theme'

import Print from '../src/index'

const defaultProps = {
  label: 'Print',
  showLabel: true,
  showIcon: true,
}

describe('Print', () => {
  it('should render span', () => {
    const component = renderer.create(
      <ThemeProvider><Print /></ThemeProvider>,
    )

    const tree = component.toJSON()
    expect(tree.type).toBe('span')
  })


  it('should have default props', () => {
    const component = renderer.create(
      <ThemeProvider><Print /></ThemeProvider>,
    )

    const testInstance = component.root
    expect(testInstance.findByType(Print).props.label).toBe(defaultProps.label)
    expect(testInstance.findByType(Print).props.showLabel).toBe(defaultProps.showLabel)
    expect(testInstance.findByType(Print).props.showIcon).toBe(defaultProps.showIcon)
  })
})

