import React from 'react'
import renderer from 'react-test-renderer'
import { ThemeProvider } from '@hixme-ui/theme'
import Icon from '../src/index'

describe('Icon', () => {
  it('should be a span', () => {
    const component = renderer.create(
      (<ThemeProvider><Icon menu /></ThemeProvider>),
    )

    const tree = component.toJSON()
    expect(tree.type).toBe('span')
  })
})
