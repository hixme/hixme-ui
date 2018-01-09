import React from 'react'
import renderer from 'react-test-renderer'
import { ThemeProvider } from '@hixme-ui/theme'
import 'jest-styled-components'

import Table from '../src/index.js'

describe('Table', () => {
  test('Should render ok', () => {
    const component = renderer.create(
      <ThemeProvider>
        <Table />
      </ThemeProvider>
    )

    const tree = component.toJSON()
    expect(tree.type).toBe('div')
  })
})
