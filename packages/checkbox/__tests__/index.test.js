import React from 'react'
import renderer from 'react-test-renderer'
import { ThemeProvider } from '@hixme-ui/theme'
import Checkbox from '../src/index.js'

test('Checkbox', () => {
  const component = renderer.create(
    (<ThemeProvider><Checkbox /></ThemeProvider>),
  )

  const tree = component.toJSON()
  expect(tree.type).toBe('label')
})
