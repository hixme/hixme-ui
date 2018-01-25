import React from 'react'
import renderer from 'react-test-renderer'
import { ThemeProvider } from '@hixme-ui/theme'
import 'jest-styled-components'

import { StyledSidebarContent } from '../src/index'

describe('StyledSidebarContent', () => {
  test('Should render okay', () => {
    const component = renderer.create(
      <ThemeProvider>
        <StyledSidebarContent />
      </ThemeProvider>,
    )

    const tree = component.toJSON()
    expect(tree.type).toBe('div')
  })

  test('Should have static StyledSidebarContent style properties', () => {
    const component = renderer.create(
      <ThemeProvider>
        <StyledSidebarContent />
      </ThemeProvider>,
    )

    const tree = component.toJSON()
    expect(tree).toHaveStyleRule('padding', '0px 28px')
  })
})
