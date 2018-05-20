import React from 'react'
import renderer from 'react-test-renderer'
import { ThemeProvider } from '@hixme-ui/theme'
import 'jest-styled-components'

import Toggle from '../src/index.js'

describe('Toggle', () => {
  test('Should render ok', () => {
    const component = renderer.create(
      <ThemeProvider>
        <Toggle />
      </ThemeProvider>,
    )

    const tree = component.toJSON()
    expect(tree.type).toBe('label')
  })
})
