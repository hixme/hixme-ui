import React from 'react'
import renderer from 'react-test-renderer'
import { ThemeProvider, colors } from '@hixme-ui/theme'
import 'jest-styled-components'

import Card from '../src/index'

describe('Card', () => {
  test('it renders', () => {
    const component = renderer.create(
      <ThemeProvider><Card /></ThemeProvider>,
    )

    const tree = component.toJSON()
    expect(tree.type).toBe('div')
  })

  test('it has 20px padding by default', () => {
    const component = renderer.create(
      <ThemeProvider><Card /></ThemeProvider>,
    )

    const tree = component.toJSON()
    expect(tree).toHaveStyleRule('padding', '20px')
  })

  test('it has rounded corners default', () => {
    const component = renderer.create(
      <ThemeProvider><Card /></ThemeProvider>,
    )

    const tree = component.toJSON()
    expect(tree).toHaveStyleRule('border-radius', '6px')
  })

  test('it has box shadow default', () => {
    const component = renderer.create(
      <ThemeProvider><Card /></ThemeProvider>,
    )

    const tree = component.toJSON()
    expect(tree).toHaveStyleRule('box-shadow', `0 3px 3px ${colors.grey120}`)
  })
})
