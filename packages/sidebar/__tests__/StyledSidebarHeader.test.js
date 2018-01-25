import React from 'react'
import renderer from 'react-test-renderer'
import { ThemeProvider } from '@hixme-ui/theme'
import 'jest-styled-components'

import { StyledSidebarHeader } from '../src/index'

describe('StyledSidebarHeader', () => {
  test('Should render okay', () => {
    const component = renderer.create(
      <ThemeProvider>
        <StyledSidebarHeader />
      </ThemeProvider>,
    )

    const tree = component.toJSON()
    expect(tree.type).toBe('div')
  })

  test('Should have static StyledSidebarHeader style properties', () => {
    const component = renderer.create(
      <ThemeProvider>
        <StyledSidebarHeader />
      </ThemeProvider>,
    )

    const tree = component.toJSON()
    expect(tree).toHaveStyleRule('border-bottom', 'solid 1px #f2f6f9')
    expect(tree).toHaveStyleRule('padding', '0px 28px')
  })
})

