import React from 'react'
import renderer from 'react-test-renderer'
import { ThemeProvider } from '@hixme-ui/theme'
import Select from '../src/Select'

test('Select', () => {
  const component = renderer.create(
    (<ThemeProvider><Select list={[{ id: 0, name: 'name' }]} /></ThemeProvider>),
  )

  const tree = component.toJSON()
  expect(tree.type).toBe('select')
})
