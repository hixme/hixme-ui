import React from 'react'
import renderer from 'react-test-renderer'
import { ThemeProvider } from '@hixme-ui/theme'
import Text, {
  HyperLink,
  Label,
  LabelBase,
  Paragraph,
  TextBase,
  TextLink,
} from '../src'

describe('Input', () => {
  it('should render a span', () => {
    const component = renderer.create(
      (<ThemeProvider><Text>I said good day sir</Text></ThemeProvider>),
    )

    const tree = component.toJSON()
    expect(tree.type).toBe('span')
  })

  describe('HyperLink', () => {
    it('should be defined', () => {
      expect(HyperLink).toBeDefined()
    })
  })

  describe('TextLink', () => {
    it('should be defined', () => {
      expect(TextLink).toBeDefined()
    })
  })

  describe('Paragraph', () => {
    it('should be defined', () => {
      expect(Paragraph).toBeDefined()
    })
  })

  describe('Label', () => {
    it('should be defined', () => {
      expect(Label).toBeDefined()
    })
  })

  describe('LabelBase', () => {
    it('should be defined', () => {
      expect(LabelBase).toBeDefined()
    })
  })
})

