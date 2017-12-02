import React from 'react'
import renderer from 'react-test-renderer'
import { ThemeProvider } from '@hixme-ui/theme'
import ContentContainer from '../src/index.js'

describe('ContentContainer', () => {
  it('Should have a h1 tag', () => {
    const component = renderer.create(
      (<ThemeProvider><ContentContainer>Children</ContentContainer></ThemeProvider>),
    )
  })
})
