import React from 'react'
import renderer from 'react-test-renderer'
import { ThemeProvider } from '@hixme-ui/theme'
import Email from '../src'

describe('Email', () => {
  describe('address prop', function() {
    const component = renderer.create(
      (<ThemeProvider><Email address='test@user.com' /></ThemeProvider>),
    )
    const tree = component.toJSON()

    it('should render anchor', () => {
      expect(tree.type).toBe('a')
    })
    it('should have email address as children', () => {
      expect(tree.children[0]).toBe('test@user.com')
    })
  })

  describe('with children ', function() {
    const component = renderer.create(
      (<ThemeProvider>
        <Email address='test@user.com'>Click here</Email>
      </ThemeProvider>),
    )
    const tree = component.toJSON()

    it('should render anchor', () => {
      expect(tree.type).toBe('a')
    })
    it('should have children displayed instead of email address', () => {
      expect(tree.children[0]).toBe('Click here')
    })
  })
})
