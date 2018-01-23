import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import { StyledHeaderContainer } from '../../../src/index'

describe('StyledHeaderContainer', () => {
  test('Should render ok', () => {
    const component = renderer.create(<StyledHeaderContainer />)
    const tree = component.toJSON()

    expect(tree.type).toBe('div')
  })

  test('Should have left of 300px when receiving the open prop', () => {
    const component = renderer.create(<StyledHeaderContainer open sidebarWidth='300px' />)
    const tree = component.toJSON()

    expect(tree).toHaveStyleRule('left', '300px')
  })

  test('Should have left of 0px by default', () => {
    const component = renderer.create(<StyledHeaderContainer />)
    const tree = component.toJSON()

    expect(tree).toHaveStyleRule('left', '0px')
  })

  test('Should apply position fixed when receiving the fixed prop', () => {
    const component = renderer.create(<StyledHeaderContainer fixed />)
    const tree = component.toJSON()

    expect(tree).toHaveStyleRule('position', 'fixed')
  })

  test('Should have position static by default', () => {
    const component = renderer.create(<StyledHeaderContainer />)
    const tree = component.toJSON()

    expect(tree).toHaveStyleRule('position', 'static')
  })

  test('Should have no padding in print media query', () => {
    const component = renderer.create(<StyledHeaderContainer />)
    const tree = component.toJSON()

    expect(tree).toHaveStyleRule('display', 'none', {
      media: 'print'
    })
  })

  test('Should have all StyledHeaderContainer styles', () => {
    const component = renderer.create(<StyledHeaderContainer />)
    const tree = component.toJSON()

    expect(tree).toHaveStyleRule('z-index', '1000')
    expect(tree).toHaveStyleRule('background-color', 'white')
    expect(tree).toHaveStyleRule('box-shadow', '0 2px 4px rgba(0,0,0,0.15)')
    expect(tree).toHaveStyleRule('height', '56px')
    expect(tree).toHaveStyleRule('right', '0px')
    expect(tree).toHaveStyleRule('transition', 'left 0.5s')
    expect(tree).toHaveStyleRule('display', 'flex')
    expect(tree).toHaveStyleRule('align-items', 'center')
    expect(tree).toHaveStyleRule('padding', '0 20px 0 20px')
  })
})



