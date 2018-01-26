import React from 'react'
import renderer from 'react-test-renderer'
import { ThemeProvider } from '@hixme-ui/theme'
import 'jest-styled-components'

import { StyledUploadContent } from '../src/index'

describe('StyledUploadContent', () => {
  test('Should render okay', () => {
    const component = renderer.create(
      <ThemeProvider>
        <StyledUploadContent />
      </ThemeProvider>,
    )

    const tree = component.toJSON()
    expect(tree.type).toBe('div')
  })

  test('Should have default margin of 0', () => {
    const component = renderer.create(
      <ThemeProvider>
        <StyledUploadContent />
      </ThemeProvider>,
    )

    const tree = component.toJSON()
    expect(tree).toHaveStyleRule('margin', '0')
  })

  test('Should have 0 18px margin when receiving the compact prop', () => {
    const component = renderer.create(
      <ThemeProvider>
        <StyledUploadContent compact />
      </ThemeProvider>,
    )

    const tree = component.toJSON()
    expect(tree).toHaveStyleRule('margin', '0 18px')
  })
})
