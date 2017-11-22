import React from 'react'
import renderer from 'react-test-renderer'
import FormGroup from '../src/index.js'

test(`${FormGroup.displayName}`, () => {
  const component = renderer.create(
    (<FormGroup><span>Hello</span></FormGroup>),
  )

  const tree = component.toJSON()
  expect(tree.type).toBe('div')
})

