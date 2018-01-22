import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import { ChevronRow } from '../src/index'

describe('ChevronRow', () => {
  test('Should render ok', () => {
    const component = renderer.create(<ChevronRow />)
    const tree = component.toJSON()

    expect(tree.type).toBe('div')
  })

  test('Should have rotate(90deg) transform prop when closed', () => {
    const component = renderer.create(<ChevronRow />)
    const tree = component.toJSON()

    expect(tree).toHaveStyleRule('transform', 'rotate(90deg)')
  })

  test('Should have rotate(90deg) transform prop when open', () => {
    const component = renderer.create(<ChevronRow open />)
    const tree = component.toJSON()

    expect(tree).toHaveStyleRule('transform', 'rotate(270deg)')
  })

  test('Should have transform transition', () => {
    const component = renderer.create(<ChevronRow />)
    const tree = component.toJSON()

    expect(tree).toHaveStyleRule('transition', 'transform .25s ease')
  })
})

