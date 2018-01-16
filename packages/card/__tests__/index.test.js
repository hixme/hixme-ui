import React from 'react'
import renderer from 'react-test-renderer'
import { ThemeProvider } from '@hixme-ui/theme'
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
})
