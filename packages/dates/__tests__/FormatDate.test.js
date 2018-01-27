import React from 'react'
import renderer from 'react-test-renderer'
import { ThemeProvider } from '@hixme-ui/theme'
import 'jest-styled-components'

import { FormatDate } from '../src/index'

describe('FormatDate', () => {
  test('Should render okay', () => {
    const component = renderer.create(
      <ThemeProvider>
        <FormatDate />
      </ThemeProvider>,
    )

    const tree = component.toJSON()
    expect(tree.type).toBe('time')
  })
})
