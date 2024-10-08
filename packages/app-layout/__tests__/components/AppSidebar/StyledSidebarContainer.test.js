import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import { StyledSidebarContainer } from '../../../src/index'

describe('StyledSidebarContainer', () => {
  test('Should render ok', () => {
    const component = renderer.create(<StyledSidebarContainer />)
    const tree = component.toJSON()

    expect(tree.type).toBe('div')
  })

  test('Should have all StyledSidebarContainer styles', () => {
    const component = renderer.create(<StyledSidebarContainer />)
    const tree = component.toJSON()

    expect(tree).toHaveStyleRule('position', 'relative')
    expect(tree).toHaveStyleRule('line-height', '25px')
    expect(tree).toHaveStyleRule('height', '100%')
    expect(tree).toHaveStyleRule('overflow-y', 'auto')
  })
})

