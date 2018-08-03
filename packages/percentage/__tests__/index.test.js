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


  describe('Percentage.format()', () => {
    it('should return "Invalid" for bad data - no params', () => {
      expect(Percentage.format()).toBe('%')
    })
    it('should return "Invalid" for bad data - empty params', () => {
      expect(Percentage.format({})).toBe('%')
    })
    it('should return "Invalid" for bad data - value string', () => {
      expect(Percentage.format({ value: 'hello' })).toBe('%')
    })
    it('should return "Invalid" for bad data - children string', () => {
      expect(Percentage.format({ children: 'hello' })).toBe('%')
    })

    it('should return 0.00% for value zero', () => {
      expect(Percentage.format({ value: 0 })).toBe('0.00%')
    })
    it('should return 0.00% for value zero- override children', () => {
      expect(Percentage.format({ value: 0, children: 17 })).toBe('0.00%')
    })

    it('should return 100.00% for value 1', () => {
      expect(Percentage.format({ value: 1 })).toBe('100.00%')
    })
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
