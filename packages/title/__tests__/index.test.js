import React from 'react'
import renderer from 'react-test-renderer'
import { ThemeProvider } from '@hixme-ui/theme'
import Title from '../src/index.js'

describe('Title', () => {
  it('Should have a h1 tag', () => {
    const component = renderer.create(
      (<ThemeProvider><Title>Default title</Title></ThemeProvider>),
    )

    const tree = component.toJSON()
    expect(tree.type).toBe('h1')
  })
})

describe('Title jumbo', () => {
  it('Should have a h1 tag', () => {
    const component = renderer.create(
      (<ThemeProvider><Title jumbo>Jumbo title</Title></ThemeProvider>),
    )

    const tree = component.toJSON()
    expect(tree.type).toBe('h1')
  })
})

describe('Title small', () => {
  it('Should have a h2 tag', () => {
    const component = renderer.create(
      (<ThemeProvider><Title small>Small title</Title></ThemeProvider>),
    )

    const tree = component.toJSON()
    expect(tree.type).toBe('h2')
  })
})

describe('Title smaller', () => {
  it('Should have a h3 tag', () => {
    const component = renderer.create(
      (<ThemeProvider><Title smaller>Smaller title</Title></ThemeProvider>),
    )

    const tree = component.toJSON()
    expect(tree.type).toBe('h3')
  })
})

describe('Title smallest', () => {
  it('Should have a h4 tag', () => {
    const component = renderer.create(
      (<ThemeProvider><Title smallest>Smallest title</Title></ThemeProvider>),
    )

    const tree = component.toJSON()
    expect(tree.type).toBe('h4')
  })
})
