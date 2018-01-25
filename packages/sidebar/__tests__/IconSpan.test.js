import React from 'react'
import renderer from 'react-test-renderer'
import { ThemeProvider } from '@hixme-ui/theme'
import 'jest-styled-components'

import { IconSpan } from '../src/index'

describe('IconSpan', () => {
  test('Should render okay', () => {
    const component = renderer.create(
      <ThemeProvider>
        <IconSpan />
      </ThemeProvider>,
    )

    const tree = component.toJSON()
    expect(tree.type).toBe('div')
  })

  test('Should have float right property', () => {
    const component = renderer.create(
      <ThemeProvider>
        <IconSpan />
      </ThemeProvider>,
    )

    const tree = component.toJSON()
    expect(tree).toHaveStyleRule('float', 'right')
  })
})
