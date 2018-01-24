import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import { StyledContent } from '../src/index'

describe('StyledContent', () => {
  test('Should render ok', () => {
    const component = renderer.create(<StyledContent />)
    const tree = component.toJSON()

    expect(tree.type).toBe('div')
  })

  test('Should have 56px top padding when receiving fixed prop', () => {
    const component = renderer.create(<StyledContent fixed />)
    const tree = component.toJSON()

    expect(tree).toHaveStyleRule('padding', '56px 0 0 0')
  })

  test('Should have no padding in print media query', () => {
    const component = renderer.create(<StyledContent />)
    const tree = component.toJSON()

    expect(tree).toHaveStyleRule('padding', '0', {
      media: 'print'
    })
  })
})


