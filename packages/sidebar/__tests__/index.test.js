import React from 'react'
import renderer from 'react-test-renderer'
import { ThemeProvider } from '@hixme-ui/theme'
import 'jest-styled-components'

import Sidebar from '../src/index'

describe('Sidebar', () => {
  test('it renders', () => {
    const component = renderer.create(
      <ThemeProvider><Sidebar /></ThemeProvider>,
    )

    const tree = component.toJSON()
    expect(tree.type).toBe('div')
  })
})
