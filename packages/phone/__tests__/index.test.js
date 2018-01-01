import React from 'react'
import renderer from 'react-test-renderer'
import { ThemeProvider } from '@hixme-ui/theme'
import Phone from '../src'

describe('Phone', () => {
  const component = renderer.create(
      (<ThemeProvider><Phone number='8881234567' /></ThemeProvider>),
    )
  const tree = component.toJSON()

  it('Should be an a tag', () => {
    expect(tree.type).toBe('a')
  })

  it('Should have an href of tel:8881234567', () => {
    expect(tree.props.href).toBeDefined()
    expect(tree.props.href).toBe('tel:8881234567')
  })

  it('Should render children with phone number', () => {
    expect(tree.children[0]).toBe('(888) 123 - 4567')
  })
})


describe('Phone.format', () => {
  it('Should be a function', () => {
    expect(Phone.format).toBeDefined()
    expect(Phone.format('8881234567')).toBe('(888) 123 - 4567')
  })
})
