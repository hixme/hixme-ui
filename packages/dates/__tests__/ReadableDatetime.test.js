import React from 'react'
import renderer from 'react-test-renderer'
import { ThemeProvider } from '@hixme-ui/theme'
import 'jest-styled-components'

import { ReadableDatetime } from '../src/index'

describe('ReadableDatetime', () => {
  test('Should render okay', () => {
    const component = renderer.create(
      <ThemeProvider>
        <ReadableDatetime datetime='' />
      </ThemeProvider>,
    )

    const tree = component.toJSON()
    expect(tree.type).toBe('time')
  })
})

