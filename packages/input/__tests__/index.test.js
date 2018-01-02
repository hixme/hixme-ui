import React from 'react'
import renderer from 'react-test-renderer'
import { ThemeProvider } from '@hixme-ui/theme'
import Input, { InputBase } from '../src'

describe('InputBase', () => {
  it('no props', () => {
    const component = renderer.create(
      (<ThemeProvider><InputBase /></ThemeProvider>),
    )

    const tree = component.toJSON()
    expect(tree.type).toBe('input')
  })

  it('search prop', () => {
    const component = renderer.create(
      (<ThemeProvider><InputBase search /></ThemeProvider>),
    )

    const tree = component.toJSON()
    expect(tree.type).toBe('input')
  })

  it('large prop', () => {
    const component = renderer.create(
      (<ThemeProvider><InputBase large /></ThemeProvider>),
    )

    const tree = component.toJSON()
    expect(tree.type).toBe('input')
  })
})

describe('Input', () => {
  it('Input', () => {
    const component = renderer.create(
      (<ThemeProvider><Input /></ThemeProvider>),
    )

    const tree = component.toJSON()
    expect(tree.type).toBe('input')
  })

  it('Phone - Masked Input', () => {
    const component = renderer.create(
      (<ThemeProvider><Input phone /></ThemeProvider>),
    )

    const tree = component.toJSON()
    expect(tree.type).toBe('input')
  })

  it('Masked Input', () => {
    const component = renderer.create(
      (<ThemeProvider><Input mask='11-11' /></ThemeProvider>),
    )

    const tree = component.toJSON()
    expect(tree.type).toBe('input')
  })

  it('Phone - Masked Input', () => {
    const component = renderer.create(
      (<ThemeProvider><Input phone /></ThemeProvider>),
    )

    const tree = component.toJSON()
    expect(tree.type).toBe('input')
  })

  it('SSN - Masked Input', () => {
    const component = renderer.create(
      (<ThemeProvider><Input ssn /></ThemeProvider>),
    )

    const tree = component.toJSON()
    expect(tree.type).toBe('input')
  })

  it('Date - Masked Input', () => {
    const component = renderer.create(
      (<ThemeProvider><Input date /></ThemeProvider>),
    )

    const tree = component.toJSON()
    expect(tree.type).toBe('input')
  })
})

describe('Textarea', () => {
  it('textarea tag', () => {
    const component = renderer.create(
    (<ThemeProvider><Input textarea /></ThemeProvider>),
  )

    const tree = component.toJSON()
    expect(tree.type).toBe('textarea')
  })
})

