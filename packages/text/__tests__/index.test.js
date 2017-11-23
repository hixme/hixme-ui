import React from 'react'
import renderer from 'react-test-renderer'
import Text from '../src/index.js'

test(`${Text.displayName}`, () => {
  const component = renderer.create(
    (<Text>I said good day sir</Text>),
  )

  const tree = component.toJSON()
  expect(tree.type).toBe('span')
})

