import React from 'react'
import renderer from 'react-test-renderer'
import { ThemeProvider } from '@hixme-ui/theme'
import Input, { InputBase } from '../src/index.js'

test('InputBase', () => {
  const component = renderer.create(
    (<ThemeProvider><InputBase /></ThemeProvider>),
  )

  const tree = component.toJSON()
  expect(tree.type).toBe('input')
})

test('Input', () => {
  const component = renderer.create(
    (<ThemeProvider><Input /></ThemeProvider>),
  )

  const tree = component.toJSON()
  expect(tree.type).toBe('input')
})
