import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import { InnerContent } from '../src/index'

describe('InnerContent', () => {
  test('Should render ok', () => {
    const component = renderer.create(<InnerContent />)
    const tree = component.toJSON()

    expect(tree.type).toBe('div')
  })

  test('Should contain all inner content styles', () => {
    const component = renderer.create(<InnerContent />)
    const tree = component.toJSON()

    expect(tree).toHaveStyleRule('user-select', 'none')
    expect(tree).toHaveStyleRule('padding', '20px')
    expect(tree).toHaveStyleRule('background-color', '#F8FAFC')
    expect(tree).toHaveStyleRule('box-shadow', 'inset 0px 11px 8px -10px #cbd6db')
    expect(tree).toHaveStyleRule('border', '1px solid #B9C5CD')
    expect(tree).toHaveStyleRule('border-top', 'none')
    expect(tree).toHaveStyleRule('border-radius', '0 0 6px 6px')
  })
})
