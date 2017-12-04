import React from 'react'
import renderer from 'react-test-renderer'
import { ThemeProvider } from '@hixme-ui/theme'
import Phone from '../src/index.js'

describe('Phone', () => {
  it('Should be an a tag', () => {
    const component = renderer.create(
      (<ThemeProvider><Phone number='8881234567' /></ThemeProvider>),
    )

    const tree = component.toJSON()
    expect(tree.type).toBe('a')
  })
})
