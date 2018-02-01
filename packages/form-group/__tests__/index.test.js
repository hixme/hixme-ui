import React from 'react'
import renderer from 'react-test-renderer'
import { ThemeProvider } from '@hixme-ui/theme'
import FormGroup from '../src/index'

describe(`${FormGroup.displayName}`, () => {
  it('should render a div', () => {
    const component = renderer.create(
      (<FormGroup><span>Hello</span></FormGroup>),
    )

    const tree = component.toJSON()
    expect(tree.type).toBe('div')
  })


  describe('FormGroup props', () => {
    const component = renderer.create(
      <ThemeProvider>
        <FormGroup label='Name' error='Name is required'>
          <input />
        </FormGroup>
      </ThemeProvider>,
    )

    const tree = component.toJSON()
    it('should render 3 children', () => {
      expect(tree.children.length).toBe(3)
    })

    it('should render label as the first child', () => {
      expect(tree.children[0].type).toBe('label')
    })

    it('should render input as the second child', () => {
      expect(tree.children[1].type).toBe('input')
    })

    it('should render input as the third child', () => {
      expect(tree.children[2].type).toBe('span')
    })
  })
})

