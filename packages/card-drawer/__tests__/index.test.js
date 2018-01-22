import React from 'react'
import renderer from 'react-test-renderer'
import { ThemeProvider } from '@hixme-ui/theme'
import 'jest-styled-components'

import CardDrawer from '../src/index'

describe('CardDrawer', () => {
  test('Should render ok', () => {
    const component = renderer.create(
      <ThemeProvider>
        <CardDrawer />
      </ThemeProvider>,
    )

    const tree = component.toJSON()
    expect(tree.type).toBe('div')
  })

  test('Should have disabled styles when receiving disabled prop', () => {
    const component = renderer.create(
      <ThemeProvider>
        <CardDrawer disabled />
      </ThemeProvider>,
    )

    const tree = component.toJSON()
    expect(tree).toHaveStyleRule('opacity', '0.4')
    expect(tree).toHaveStyleRule('position', 'relative')
    expect(tree).toHaveStyleRule('cursor', 'not-allowed')
  })
})
