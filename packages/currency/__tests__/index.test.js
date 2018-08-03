import React from 'react'
import renderer from 'react-test-renderer'
import { ThemeProvider } from '@hixme-ui/theme'
import Currency from '../src'

describe('Currency', () => {
  it('no props', () => {
    const component = renderer.create(
      (<ThemeProvider><Currency /></ThemeProvider>),
    )

    const tree = component.toJSON()
    expect(tree.type).toBe('span')
  })

  describe('Currency.format()', () => {
    it('should return "$" for bad data - no params', () => {
      expect(Currency.format()).toBe('$')
    })
    it('should return "$" for bad data - empty params', () => {
      expect(Currency.format({})).toBe('$')
    })
    it('should return "$" for bad data - value string', () => {
      expect(Currency.format({ value: 'hello' })).toBe('$')
    })
    it('should return "$" for bad data - children string', () => {
      expect(Currency.format({ children: 'hello' })).toBe('$')
    })

    it('should return $0.00 for value zero', () => {
      expect(Currency.format({ value: 0 })).toBe('$0.00')
    })
    it('should return $0.00 for value zero- override children', () => {
      expect(Currency.format({ value: 0, children: 17 })).toBe('$0.00')
    })

    it('should return $1.00 for value 1', () => {
      expect(Currency.format({ value: 1 })).toBe('$1.00')
    })
  })


  it('render integer value prop', () => {
    const component = renderer.create(
      (<ThemeProvider><Currency value={10} /></ThemeProvider>),
    )

    const tree = component.toJSON()
    expect(tree.children[0]).toBe('$10.00')
  })

  it('render float value prop', () => {
    const component = renderer.create(
      (<ThemeProvider><Currency value={10.00} /></ThemeProvider>),
    )

    const tree = component.toJSON()
    expect(tree.children[0]).toBe('$10.00')
  })

  it('render integer child value', () => {
    const component = renderer.create(
      (<ThemeProvider><Currency>10</Currency></ThemeProvider>),
    )

    const tree = component.toJSON()
    expect(tree.children[0]).toBe('$10.00')
  })

  it('render float child value', () => {
    const component = renderer.create(
      (<ThemeProvider><Currency>10.00</Currency></ThemeProvider>),
    )

    const tree = component.toJSON()
    expect(tree.children[0]).toBe('$10.00')
  })

  it('render large number with commas and round', () => {
    const component = renderer.create(
      (<ThemeProvider><Currency>123456.78901</Currency></ThemeProvider>),
    )

    const tree = component.toJSON()
    expect(tree.children[0]).toBe('$123,456.79')
  })

  describe('hideCents props', function() {
    it('should hide decimals', () => {
      const component = renderer.create(
        (<ThemeProvider><Currency hideCents>10.00</Currency></ThemeProvider>),
      )

      const tree = component.toJSON()
      expect(tree.children[0]).toBe('$10')
    })
  })


  describe('defaultSymbol prop', function() {
    it('should use a different currency symbol', () => {
      const component = renderer.create(
        (<ThemeProvider><Currency defaultSymbol='#'>10.00</Currency></ThemeProvider>),
      )

      const tree = component.toJSON()
      expect(tree.children[0]).toBe('#10.00')
    })
  })

  describe('hideCommas prop', function() {
    it('should suppress commas on large numbers', () => {
      const component = renderer.create(
        (<ThemeProvider><Currency hideCommas>123456.78901</Currency></ThemeProvider>),
      )

      const tree = component.toJSON()
      expect(tree.children[0]).toBe('$123456.79')
    })
  })

  describe('noSymbol prop', function() {
    it('should not render symbol', function() {
      const component = renderer.create(
        (<ThemeProvider><Currency noSymbol>10.00</Currency></ThemeProvider>),
      )

      const tree = component.toJSON()
      expect(tree.children[0]).toBe('10.00')
    })
  })

  describe('round prop', () => {
    it('should round to significant numbers', () => {
      const component = renderer.create(
        (<ThemeProvider><Currency round>1236.78901</Currency></ThemeProvider>),
      )

      const tree = component.toJSON()
      expect(tree.children[0]).toBe('$1,237')
    })

    it('should round to significant numbers', () => {
      const component = renderer.create(
        (<ThemeProvider><Currency round>123456.78901</Currency></ThemeProvider>),
      )

      const tree = component.toJSON()
      expect(tree.children[0]).toBe('$123,000')
    })
  })
})
