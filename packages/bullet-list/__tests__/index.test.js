import React from 'react'
import renderer from 'react-test-renderer'
import { ThemeProvider } from '@hixme-ui/theme'

import BulletList from '../src/index'

const myUnorderedList = [
  'One fish',
  'Two fish',
  'Red fish',
  'Blue fish',
]

describe('BulletList bulletArray={myUnorderedList}', () => {
  test('renders', () => {
    const component = renderer.create(
      <ThemeProvider><BulletList bulletArray={myUnorderedList} /></ThemeProvider>,
    )

    const tree = component.toJSON()
    expect(tree.type).toBe('div')
  })
})
