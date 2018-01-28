import React from 'react'
import renderer from 'react-test-renderer'
import { ThemeProvider } from '@hixme-ui/theme'

import Print from '../src/index'

const defaultProps = {
  label: 'Print',
}

describe('Print', () => {
  it('it renders', () => {
    const component = renderer.create(
      <ThemeProvider><Print /></ThemeProvider>,
    )

    const tree = component.toJSON()
    expect(tree.type).toBe('a')
  })

  /*
  it('it has default props', () => {
    const component = renderer.create(
      <ThemeProvider><Print /></ThemeProvider>,
    )

    const testInstance = component.root
    expect(testInstance.findByType(CloseButton).props.iconSize).toBe(defaultProps.iconSize)
    expect(testInstance.findByType(CloseButton).props.label).toBe(defaultProps.label)
    expect(testInstance.findByType(CloseButton).props.noLabel).toBe(defaultProps.noLabel)
  })
  */
})

