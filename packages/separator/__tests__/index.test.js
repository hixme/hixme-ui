import React from 'react'
import renderer from 'react-test-renderer'
import { colorTheme, ThemeProvider } from '@hixme-ui/theme'
import 'jest-styled-components'

import Separator from '../src/index.js'

describe('Separator' , () => {
  test('Should render ok', () => {
    const component = renderer.create(
      (<ThemeProvider><Separator /></ThemeProvider>),
    )

    const tree = component.toJSON()
    expect(tree.type).toBe('div')
  })

  describe('Margin', () => {
    test('Should have 15px top and bottom margin by default', () => {
      const component = renderer.create(
        <ThemeProvider><Separator /></ThemeProvider>,
      )

      const tree = component.toJSON()
      expect(tree).toMatchSnapshot()
      expect(tree).toHaveStyleRule('margin', '15px 0')
    })

    test('Should take margin prop', () => {
      const component = renderer.create(
        <ThemeProvider><Separator margin='30px' /></ThemeProvider>,
      )

      const tree = component.toJSON()
      expect(tree).toMatchSnapshot()
      expect(tree).toHaveStyleRule('margin', '30px')
    })
  })

  describe('Padding', () => {
    test('Should have 0 padding by default', () => {
      const component = renderer.create(
        <ThemeProvider><Separator /></ThemeProvider>,
      )

      const tree = component.toJSON()
      expect(tree).toMatchSnapshot()
      expect(tree).toHaveStyleRule('padding', '0')
    })

    test('Should take padding prop', () => {
      const component = renderer.create(
        <ThemeProvider><Separator padding='30px' /></ThemeProvider>,
      )

      const tree = component.toJSON()
      expect(tree).toMatchSnapshot()
      expect(tree).toHaveStyleRule('padding', '30px')
    })
  })

  test('Should have default color of "lighter" from the theme', () => {
    const component = renderer.create(
      <ThemeProvider><Separator /></ThemeProvider>,
    )

    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
    expect(tree).toHaveStyleRule('background', colorTheme.lighter)
  })

  test('Should have 100% width', () => {
    const component = renderer.create(
      <ThemeProvider><Separator /></ThemeProvider>,
    )

    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
    expect(tree).toHaveStyleRule('width', '100%')
  })

  test('Should have 2px border-radius', () => {
    const component = renderer.create(
      <ThemeProvider><Separator /></ThemeProvider>,
    )

    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
    expect(tree).toHaveStyleRule('border-radius', '2px')
  })

  describe('Size', () => {
    test('Should have default size of 2px', () => {
      const component = renderer.create(
        <ThemeProvider><Separator /></ThemeProvider>,
      )

      const tree = component.toJSON()
      expect(tree).toMatchSnapshot()
      expect(tree).toHaveStyleRule('height', '2px')
    })

    test('Should take size prop', () => {
      const component = renderer.create(
        <ThemeProvider><Separator size='4px' /></ThemeProvider>,
      )

      const tree = component.toJSON()
      expect(tree).toMatchSnapshot()
      expect(tree).toHaveStyleRule('height', '4px')
    })
  })
})
