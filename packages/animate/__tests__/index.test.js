import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { ThemeProvider } from '@hixme-ui/theme'

import Animate from '../src/index.js'

describe('Animate', () => {
  test('Should render ok', () => {
    const component = renderer.create(
      (<ThemeProvider><Animate /></ThemeProvider>),
    )

    const tree = component.toJSON()
    expect(tree.type).toBe('div')
  })

  describe('Time', () => {
    test('Should have 1s default time', () => {
      const component = renderer.create(
        <ThemeProvider><Animate /></ThemeProvider>,
      )

      const tree = component.toJSON()
      expect(tree).toMatchSnapshot()
      expect(tree).toHaveStyleRule('animation-duration', '1s')
    })

    test('Should take time prop', () => {
      const component = renderer.create(
        <ThemeProvider><Animate time='2s' /></ThemeProvider>,
      )

      const tree = component.toJSON()
      expect(tree).toMatchSnapshot()
      expect(tree).toHaveStyleRule('animation-duration', '2s')
    })
  })

  describe('Display', () => {
    test('Should have default display of inherit', () => {
      const component = renderer.create(
        <ThemeProvider><Animate /></ThemeProvider>,
      )

      const tree = component.toJSON()
      expect(tree).toMatchSnapshot()
      expect(tree).toHaveStyleRule('display', 'inherit')
    })

    test('Should take display prop', () => {
      const component = renderer.create(
        <ThemeProvider><Animate display='inline-flex' /></ThemeProvider>,
      )

      const tree = component.toJSON()
      expect(tree).toMatchSnapshot()
      expect(tree).toHaveStyleRule('display', 'inline-flex')
    })
  })

  describe('Delay', () => {
    test('Should have default display of inherit', () => {
      const component = renderer.create(
        <ThemeProvider><Animate /></ThemeProvider>,
      )

      const tree = component.toJSON()
      expect(tree).toMatchSnapshot()
      expect(tree).toHaveStyleRule('display', 'inherit')
    })

    test('Should take display prop', () => {
      const component = renderer.create(
        <ThemeProvider><Animate display='inline-flex' /></ThemeProvider>,
      )

      const tree = component.toJSON()
      expect(tree).toMatchSnapshot()
      expect(tree).toHaveStyleRule('display', 'inline-flex')
    })
  })

  describe('Count', () => {
    test('Should have default count of 1', () => {
      const component = renderer.create(
        <ThemeProvider><Animate /></ThemeProvider>,
      )

      const tree = component.toJSON()
      expect(tree).toMatchSnapshot()
      expect(tree).toHaveStyleRule('animation-iteration-count', '1')
    })

    test('Should take count prop', () => {
      const component = renderer.create(
        <ThemeProvider><Animate count='2' /></ThemeProvider>,
      )

      const tree = component.toJSON()
      expect(tree).toMatchSnapshot()
      expect(tree).toHaveStyleRule('animation-iteration-count', '2')
    })
  })

  describe('Trigger', () => {
    test('Should have default trigger of false', () => {
      const component = renderer.create(
        <ThemeProvider><Animate /></ThemeProvider>,
      )

      const tree = component.toJSON()
      expect(tree).toMatchSnapshot()
      expect(tree).toHaveStyleRule('animation-play-state', 'paused')
    })

    test('Should take trigger prop', () => {
      const component = renderer.create(
        <ThemeProvider><Animate trigger={true} /></ThemeProvider>,
      )

      const tree = component.toJSON()
      expect(tree).toMatchSnapshot()
      expect(tree).toHaveStyleRule('animation-play-state', 'running')
    })
  })

  describe('Fill Mode', () => {
    test('Should have default fill mode of none', () => {
      const component = renderer.create(
        <ThemeProvider><Animate /></ThemeProvider>,
      )

      const tree = component.toJSON()
      expect(tree).toMatchSnapshot()
      expect(tree).toHaveStyleRule('animation-fill-mode', 'none')
    })

    test('Should take fillMode prop', () => {
      const component = renderer.create(
        <ThemeProvider><Animate fillMode='forwards' /></ThemeProvider>,
      )

      const tree = component.toJSON()
      expect(tree).toMatchSnapshot()
      expect(tree).toHaveStyleRule('animation-fill-mode', 'forwards')
    })
  })
})
