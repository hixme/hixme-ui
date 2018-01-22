import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import { StyledTrigger } from '../src/index'

describe('StyledTrigger', () => {
  test('Should render ok', () => {
    const component = renderer.create(<StyledTrigger />)
    const tree = component.toJSON()

    expect(tree.type).toBeDefined()
  })

  test('Should have 6px border-radius all around when closed', () => {
    const component = renderer.create(<StyledTrigger />)
    const tree = component.toJSON()

    expect(tree).toHaveStyleRule('border-radius', '6px')
  })

  test('Should have 6px border-radius on top corners when open', () => {
    const component = renderer.create(<StyledTrigger open />)
    const tree = component.toJSON()

    expect(tree).toHaveStyleRule('border-radius', '6px 6px 0 0 !important')
  })

  test('Should have border-radius transition', () => {
    const component = renderer.create(<StyledTrigger />)
    const tree = component.toJSON()

    expect(tree).toHaveStyleRule('transition', 'border-radius .25s')
  })

  test('Should have pointer cursor', () => {
    const component = renderer.create(<StyledTrigger />)
    const tree = component.toJSON()

    expect(tree).toHaveStyleRule('cursor', 'pointer')
  })

  test('Should have no user select', () => {
    const component = renderer.create(<StyledTrigger />)
    const tree = component.toJSON()

    expect(tree).toHaveStyleRule('user-select', 'none')
  })
})

