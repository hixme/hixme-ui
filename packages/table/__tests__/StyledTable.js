import React from 'react'
import renderer from 'react-test-renderer'
import { ThemeProvider } from '@hixme-ui/theme'
import 'jest-styled-components'

import StyledTable from '../src/StyledTable'

describe('StyledTable', () => {
  test('Should render ok', () => {
    const component = renderer.create(
      <ThemeProvider>
        <StyledTable />
      </ThemeProvider>,
    )

    const tree = component.toJSON()
    expect(tree.type).toBe('table')
  })

  test('Should have all necessary global styles', () => {
    const component = renderer.create(
      <ThemeProvider>
        <StyledTable />
      </ThemeProvider>,
    )

    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
    expect(tree).toHaveStyleRule('width', '100%')
    expect(tree).toHaveStyleRule('border-collapse', 'collapse')
    expect(tree).toHaveStyleRule('min-width', '350px')
  })
})

