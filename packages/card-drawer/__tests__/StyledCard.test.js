import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import { StyledCard } from '../src/index'

describe('StyledCard', () => {
  test('Should render ok', () => {
    const component = renderer.create(<StyledCard />)
    const tree = component.toJSON()

    expect(tree.type).toBeDefined()
  })

  test('Should have 6px border-radius all around when closed', () => {
    const component = renderer.create(<StyledCard />)
    const tree = component.toJSON()

    expect(tree).toHaveStyleRule('border-radius', '6px')
  })

  test('Should have 6px border-radius on top corners when open', () => {
    const component = renderer.create(<StyledCard open />)
    const tree = component.toJSON()

    expect(tree).toHaveStyleRule('border-radius', '6px 6px 0 0 !important')
  })

  test('Should have border-radius transition', () => {
    const component = renderer.create(<StyledCard />)
    const tree = component.toJSON()

    expect(tree).toHaveStyleRule('transition', 'border-radius .25s')
  })
})

