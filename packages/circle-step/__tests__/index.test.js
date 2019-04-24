import React from 'react'
import renderer from 'react-test-renderer'
import { ThemeProvider } from '@hixme-ui/theme'

import CircleStep from '../src'

describe('CircleStep', () => {
  it('no props', () => {
    const component = renderer.create(
      (<ThemeProvider><CircleStep /></ThemeProvider>),
    )

    const tree = component.toJSON()
    expect(tree.type).toBe('div')
  })
})
