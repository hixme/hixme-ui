import React from 'react'
import renderer from 'react-test-renderer'
import { ThemeProvider } from '@hixme-ui/theme'
import SocialSecurity from '../src/index.js'

describe('SocialSecurity - default', () => {
  const component = renderer.create(
      (<ThemeProvider><SocialSecurity number='123456789' /></ThemeProvider>),
    )
  const tree = component.toJSON()

  it('Should be an a tag', () => {
    expect(tree.type).toBe('span')
  })

  it('Should render children with social security number', () => {
    expect(tree.children[0]).toBe('***-**-6789')
  })
})

describe('SocialSecurity - showFull', () => {
  const component = renderer.create(
      (<ThemeProvider><SocialSecurity number='123456789' showFull /></ThemeProvider>),
    )
  const tree = component.toJSON()

  it('Should be an a tag', () => {
    expect(tree.type).toBe('span')
  })

  console.log(tree)
  it('Should render children with social security number', () => {
    expect(tree.children[0]).toBe('123-45-6789')
  })
})

describe('SocialSecurity.format()', () => {
  it('Should be a function', () => {
    expect(SocialSecurity.format).toBeDefined()
    expect(SocialSecurity.format('123456789')).toBe('***-**-6789')
  })

  it('Should format ***-**-6789', () => {
    expect(SocialSecurity.format('123456789')).toBe('***-**-6789')
  })

  it('Should format 123-45-6789', () => {
    expect(SocialSecurity.format('123456789', { showFull: true })).toBe('123-45-6789')
  })
})

