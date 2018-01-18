import React from 'react'
import renderer from 'react-test-renderer'
import { ThemeProvider } from '@hixme-ui/theme'
import Percentage from '../src'

describe('Percentage', () => {
  it('no props', () => {
    const component = renderer.create(
      (<ThemeProvider><Percentage /></ThemeProvider>),
    )

    const tree = component.toJSON()
    expect(tree.type).toBe('span')
  })

  it('render integer value prop', () => {
    const component = renderer.create(
      (<ThemeProvider><Percentage value={0.10} /></ThemeProvider>),
    )

    const tree = component.toJSON()
    expect(tree.children[0]).toBe('10.00%')
  })

  it('render float value prop', () => {
    const component = renderer.create(
      (<ThemeProvider><Percentage value={0.10} /></ThemeProvider>),
    )

    const tree = component.toJSON()
    expect(tree.children[0]).toBe('10.00%')
  })

  it('render integer child value', () => {
    const component = renderer.create(
      (<ThemeProvider><Percentage>0.10</Percentage></ThemeProvider>),
    )

    const tree = component.toJSON()
    expect(tree.children[0]).toBe('10.00%')
  })

  it('render float child value', () => {
    const component = renderer.create(
      (<ThemeProvider><Percentage>0.10</Percentage></ThemeProvider>),
    )

    const tree = component.toJSON()
    expect(tree.children[0]).toBe('10.00%')
  })

  describe('hideDecimals props', function() {
    it('should hide decimals', () => {
      const component = renderer.create(
        (<ThemeProvider><Percentage hideDecimals>0.1012</Percentage></ThemeProvider>),
      )

      const tree = component.toJSON()
      expect(tree.children[0]).toBe('10%')
    })
  })
})
