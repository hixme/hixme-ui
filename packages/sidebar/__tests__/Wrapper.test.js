import React from 'react'
import renderer from 'react-test-renderer'
import { ThemeProvider } from '@hixme-ui/theme'
import 'jest-styled-components'

import { Wrapper } from '../src/index'

describe('Wrapper', () => {
  test('Should render okay', () => {
    const component = renderer.create(
      <ThemeProvider>
        <Wrapper />
      </ThemeProvider>,
    )

    const tree = component.toJSON()
    expect(tree.type).toBe('div')
  })

  test('Should have all static Wrapper properties', () => {
    const component = renderer.create(
      <ThemeProvider>
        <Wrapper />
      </ThemeProvider>,
    )

    const tree = component.toJSON()
    expect(tree).toHaveStyleRule('position', 'fixed')
    expect(tree).toHaveStyleRule('background', '#fff')
    expect(tree).toHaveStyleRule('background-color', '#fff')
    expect(tree).toHaveStyleRule('box-shadow', '0 1px 3px #b9c5cd')
    expect(tree).toHaveStyleRule('height', '100%')
    expect(tree).toHaveStyleRule('overflow-x', 'auto')
    expect(tree).toHaveStyleRule('padding-bottom', '10px')
    expect(tree).toHaveStyleRule('right', '0')
    expect(tree).toHaveStyleRule('transition', 'margin-right 0.5s')
    expect(tree).toHaveStyleRule('top', '0')
  })

  test('Should have margin-top with value of topOffset', () => {
    const component = renderer.create(
      <ThemeProvider>
        <Wrapper topOffset={60} />
      </ThemeProvider>,
    )

    const tree = component.toJSON()
    expect(tree).toHaveStyleRule('margin-top', '60px')
  })

  test('Should have margin-right of 0 when receiving open prop', () => {
    const component = renderer.create(
      <ThemeProvider>
        <Wrapper open />
      </ThemeProvider>,
    )

    const tree = component.toJSON()
    expect(tree).toHaveStyleRule('margin-right', '0')
  })

  test('Should have margin-right of sidebarWidth when open is false', () => {
    const component = renderer.create(
      <ThemeProvider>
        <Wrapper open={false} sidebarWidth='400px' />
      </ThemeProvider>,
    )

    const tree = component.toJSON()
    expect(tree).toHaveStyleRule('margin-right', '-400px')
  })

  test('Should have width of sidebarWidth', () => {
    const component = renderer.create(
      <ThemeProvider>
        <Wrapper sidebarWidth='400px' />
      </ThemeProvider>,
    )

    const tree = component.toJSON()
    expect(tree).toHaveStyleRule('width', '400px')
  })
})
