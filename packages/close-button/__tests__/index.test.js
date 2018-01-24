import React from 'react'
import renderer from 'react-test-renderer'
import { ThemeProvider } from '@hixme-ui/theme'
import Container from '@hixme-ui/container'

import CloseButton from '../src/index'

const defaultProps = {
  iconSize: 1.8,
  onClick: () => null,
  label: 'CLOSE',
  noLabel: false,
}

describe('Container', () => {
  test('it renders', () => {
    const component = renderer.create(
      <ThemeProvider><CloseButton /></ThemeProvider>,
    )

    const tree = component.toJSON()
    expect(tree.type).toBe('div')
  })

  test('it has defaultProps', () => {
    const component = renderer.create(
      <ThemeProvider><CloseButton /></ThemeProvider>,
    )

    const testInstance = component.root
    expect(testInstance.findByType(CloseButton).props.iconSize).toBe(defaultProps.iconSize)
    expect(testInstance.findByType(CloseButton).props.label).toBe(defaultProps.label)
    expect(testInstance.findByType(CloseButton).props.noLabel).toBe(defaultProps.noLabel)
  })
})

