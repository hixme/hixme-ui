import React from 'react'
import renderer from 'react-test-renderer'
import { ThemeProvider } from '@hixme-ui/theme'

import Tabs from '../src/index.js'

describe('Tabs', () => {
  test('Should render okay', () => {
    const component = renderer.create(
      (<ThemeProvider><Tabs id='1' list={[]} /></ThemeProvider>),
    )

    const tree = component.toJSON()
    expect(tree.type).toBe('div')
  })
})
