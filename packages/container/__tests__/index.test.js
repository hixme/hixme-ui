import React from 'react'
import renderer from 'react-test-renderer'
import { ThemeProvider } from '@hixme-ui/theme'
import Container from '../src/index.js'

test('Animate', () => {
  const component = renderer.create(
    (<ThemeProvider><Container /></ThemeProvider>),
  )

  const tree = component.toJSON()
  expect(tree.type).toBe('div')
})
