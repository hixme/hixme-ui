import React from 'react'
import renderer from 'react-test-renderer'
import { ThemeProvider } from '@hixme-ui/theme'
import Text from '../src'

test('Input', () => {
  const component = renderer.create(
    (<ThemeProvider><Text>I said good day sir</Text></ThemeProvider>),
  )

  const tree = component.toJSON()
  expect(tree.type).toBe('span')
})

