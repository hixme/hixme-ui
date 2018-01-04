import React from 'react'
import renderer from 'react-test-renderer'
import { ThemeProvider } from '@hixme-ui/theme'
import Component from '../src/index.js'

test('Component', () => {
  const component = renderer.create(
    <ThemeProvider>
      <Component>
        something
      </Component>
    </ThemeProvider>
  )

  const tree = component.toJSON()
  expect(tree.type).toBe('div')
})
