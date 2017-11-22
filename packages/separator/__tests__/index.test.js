import React from 'react'
import renderer from 'react-test-renderer'
import { ThemeProvider } from '@hixme-ui/theme'
import Separator from '../src/index.js'

test('Separator', () => {
  const component = renderer.create(
    (<ThemeProvider><Separator /></ThemeProvider>),
  )

  const tree = component.toJSON()
  expect(tree.type).toBe('div')
})
