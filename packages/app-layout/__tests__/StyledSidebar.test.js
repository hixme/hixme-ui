import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import { StyledSidebar } from '../src/index'

describe('StyledSidebar', () => {
  test('Should render ok', () => {
    const component = renderer.create(<StyledSidebar />)
    const tree = component.toJSON()

    expect(tree.type).toBe('div')
  })

  test('Should apply a margin-left with width specified by sidebarWidth when receiving open prop', () => {
    const component = renderer.create(<StyledSidebar sidebarWidth={'300px'} />)
    const tree = component.toJSON()

    expect(tree).toHaveStyleRule('width', '300px')
  })

  test('Should have no display on print', () => {
    const component = renderer.create(<StyledSidebar />)
    const tree = component.toJSON()

    expect(tree).toHaveStyleRule('display', 'none', {
      media: 'print'
    })
  })

  test('Should have all StyledSidebar styles', () => {
    const component = renderer.create(<StyledSidebar />)
    const tree = component.toJSON()

    expect(tree).toHaveStyleRule('height', '100%')
    expect(tree).toHaveStyleRule('position', 'fixed')
    expect(tree).toHaveStyleRule('bottom', '0')
    expect(tree).toHaveStyleRule('left', '0')
    expect(tree).toHaveStyleRule('top', '0')
  })
})


