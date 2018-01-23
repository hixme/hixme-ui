import React from 'react'
import renderer from 'react-test-renderer'
import { ThemeProvider } from '@hixme-ui/theme'
import 'jest-styled-components'

import AppLayout from '../src/index'

describe('AppLayout', () => {
  test('Should render okay', () => {
    const component = renderer.create(
      <ThemeProvider>
        <AppLayout>
          <p>My app content</p>
        </AppLayout>
      </ThemeProvider>,
    )

    const tree = component.toJSON()
    expect(tree.type).toBe('div')
  })
})
