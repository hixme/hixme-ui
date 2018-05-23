import React from 'react'
import renderer from 'react-test-renderer'
import { ThemeProvider } from '@hixme-ui/theme'
import Placeholder from '../src'

describe('Placeholder', () => {
  it('no props', () => {
    const component = renderer.create(
      (<ThemeProvider><Placeholder /></ThemeProvider>),
    )

    const tree = component.toJSON()
    expect(tree.type).toBe('div')
  })
})
