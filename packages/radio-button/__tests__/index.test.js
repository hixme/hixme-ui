import React from 'react'
import renderer from 'react-test-renderer'
import { ThemeProvider } from '@hixme-ui/theme'
import RadioButton from '../src'

describe('RadioButton', () => {
  const component = renderer.create(
    (<ThemeProvider><RadioButton name='gender' text='Male' value='male' /></ThemeProvider>),
  )
  const tree = component.toJSON()

  it('should have a label wrapper', function() {
    expect(tree.type).toBe('label')
  })

  it('should have 3 children', function() {
    expect(tree.children.length).toBe(3)
  })

  describe('Radio control', function() {
    const RadioControl = tree.children[0]

    it('should be an input', function() {
      expect(RadioControl.type).toBe('input')
    })

    it('should have prop type radio ', function() {
      expect(RadioControl.props.type).toBe('radio')
    })

    it('should have prop name gender', function() {
      expect(RadioControl.props.name).toBe('gender')
    })

    it('should have prop value male', function() {
      expect(RadioControl.props.value).toBe('male')
    })

    it('should have prop id format', function() {
      expect(RadioControl.props.id).toBe('hui:rb-gender-Male-male')
    })
  })

  describe('Fake radio display', function() {
    const FakeRadio = tree.children[1]

    it('should be a span', function() {
      expect(FakeRadio.type).toBe('span')
    })

    it('should have prop className with fakeRadio', function() {
      expect(FakeRadio.props.className.includes('fakeRadio')).toBe(true)
    })
  })

  describe('Radio label display', function() {
    const RadioLabel = tree.children[2]

    it('should be a label', function() {
      expect(RadioLabel.type).toBe('label')
    })

    it('should have child with text', function() {
      expect(RadioLabel.children[0]).toBe('Male')
    })
  })
})
