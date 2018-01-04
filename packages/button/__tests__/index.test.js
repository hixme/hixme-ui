import React from 'react'
import renderer from 'react-test-renderer'
import theme, { ThemeProvider } from '@hixme-ui/theme'

import 'jest-styled-components'

import Button from '../src/index'

describe('Button', () => {
  test('renders', () => {
    const component = renderer.create(
      <ThemeProvider><Button /></ThemeProvider>,
    )

    const tree = component.toJSON()
    expect(tree.type).toBe('button')
  })

  test('has default padding', () => {
    const component = renderer.create(
      <ThemeProvider><Button /></ThemeProvider>,
    )

    const tree = component.toJSON()
    expect(tree).toHaveStyleRule('padding', '0.25em 1em')
  })

  test('outline has white background', () => {
    const component = renderer.create(
      <ThemeProvider><Button outline/></ThemeProvider>,
    )

    const tree = component.toJSON()
    expect(tree).toHaveStyleRule('background', 'white')
  })

  test('outline has blue text, border', () => {
    const component = renderer.create(
      <ThemeProvider><Button blue outline/></ThemeProvider>,
    )
    const tree = component.toJSON()
    expect(tree).toHaveStyleRule('color', theme.outlineButtonColors.blue)
    expect(tree).toHaveStyleRule('border-color', theme.outlineButtonColors.blue)
  })

})
