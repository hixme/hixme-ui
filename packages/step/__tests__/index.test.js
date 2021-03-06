import React from 'react'
import renderer from 'react-test-renderer'
import { ThemeProvider } from '@hixme-ui/theme'
import 'jest-styled-components'

import Step from '../src/index'

describe('Step', () => {
  test('it renders', () => {
    const component = renderer.create(
      <ThemeProvider><Step>1</Step></ThemeProvider>,
    )

    const tree = component.toJSON()
    expect(tree.type).toBe('div')
  })
})
