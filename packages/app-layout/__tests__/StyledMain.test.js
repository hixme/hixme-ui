import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import { StyledMain } from '../src/index'

describe('StyledMain', () => {
  test('Should render ok', () => {
    const component = renderer.create(<StyledMain />)
    const tree = component.toJSON()

    expect(tree.type).toBe('div')
  })

  test('Should apply a background color', () => {
    const component = renderer.create(<StyledMain contentBackgroundColor={'#fff'} />)
    const tree = component.toJSON()

    expect(tree).toHaveStyleRule('background-color', '#fff')
  })

  test('Should apply a margin-left with width specified by sidebarWidth when receiving open prop', () => {
    const component = renderer.create(<StyledMain open sidebarWidth={'300px'} />)
    const tree = component.toJSON()

    expect(tree).toHaveStyleRule('margin-left', '300px')
  })

  test('Should have no margin-left by default', () => {
    const component = renderer.create(<StyledMain />)
    const tree = component.toJSON()

    expect(tree).toHaveStyleRule('margin-left', '0')
  })

  test('Should have all StyledMain styles', () => {
    const component = renderer.create(<StyledMain open sidebarWidth={'300px'} />)
    const tree = component.toJSON()

    expect(tree).toHaveStyleRule('min-height', '100%')
    expect(tree).toHaveStyleRule('position', 'relative')
    expect(tree).toHaveStyleRule('transition', 'margin-left 0.5s')
  })
})


