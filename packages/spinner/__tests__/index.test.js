import React from 'react'
import renderer from 'react-test-renderer'
import { ThemeProvider } from '@hixme-ui/theme'

import Spinner from '../src/index'

describe('Container', () => {
  test('it renders', () => {
    const component = renderer.create(
      <ThemeProvider>
        <Spinner />
      </ThemeProvider>,
    )

    const tree = component.toJSON()
    expect(tree.type).toBe('span')
  })
})

