import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { ThemeProvider } from '@hixme-ui/theme'
import Input, { InputBase, SpinnerContainer } from '../src'

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

  it('currency prop', () => {
    const component = renderer.create(
      (<ThemeProvider><InputBase currency /></ThemeProvider>),
    )

    const tree = component.toJSON()
    expect(tree.type).toBe('input')
  })

  it('percentage prop', () => {
    const component = renderer.create(
      (<ThemeProvider><InputBase percentage /></ThemeProvider>),
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

  it('Input', () => {
    const component = renderer.create(
      (<ThemeProvider><Input currency /></ThemeProvider>),
    )

    const tree = component.toJSON()
    expect(tree.type).toBe('div')
  })

  it('Input', () => {
    const component = renderer.create(
      (<ThemeProvider><Input percentage /></ThemeProvider>),
    )

    const tree = component.toJSON()
    expect(tree.type).toBe('div')
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

  it('Date - submitting', () => {
    const component = renderer.create(
      (<ThemeProvider><Input submitting /></ThemeProvider>),
    )

    const tree = component.toJSON()
    expect(tree.type).toBe('div')
  })
})

describe('SpinnerContainer', () => {
  it('Should have all styles', () => {
    const component = renderer.create(
      <ThemeProvider>
        <SpinnerContainer />
      </ThemeProvider>,
    )

    const tree = component.toJSON()
    expect(tree).toHaveStyleRule('position', 'absolute')
    expect(tree).toHaveStyleRule('top', '12px')
    expect(tree).toHaveStyleRule('right', '12px')
    expect(tree).toHaveStyleRule('cursor', 'not-allowed')
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

