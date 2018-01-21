import React from 'react'
import renderer from 'react-test-renderer'
import { ThemeProvider } from '@hixme-ui/theme'
import RadioButton from '../src'

test('RadioButton', () => {
  const component = renderer.create(
    (<ThemeProvider><RadioButton name='gender' text='Male' /></ThemeProvider>),
  )

  const tree = component.toJSON()
  expect(tree.type).toBe('label')
})
