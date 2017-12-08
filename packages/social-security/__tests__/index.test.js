import React from 'react'
import renderer from 'react-test-renderer'
import { ThemeProvider } from '@hixme-ui/theme'
import SocialSecurity from '../src/index.js'

describe('SocialSecurity.format', () => {
  it('Should be a function', () => {
    expect(SocialSecurity.format).toBeDefined()
    expect(SocialSecurity.format('123456789')).toBe('***-**-6789')
  })
})
