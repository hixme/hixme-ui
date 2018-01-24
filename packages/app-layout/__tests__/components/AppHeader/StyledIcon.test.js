import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import { StyledIcon } from '../../../src/index'

describe('StyledIcon', () => {
  test('Should render ok', () => {
    const component = renderer.create(<StyledIcon />)
    const tree = component.toJSON()

    expect(tree.type).toBe('a')
  })

  test('Should have all StyledIcon styles', () => {
    const component = renderer.create(<StyledIcon />)
    const tree = component.toJSON()

    expect(tree).toHaveStyleRule('cursor', 'pointer')
  })
})
