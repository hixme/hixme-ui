import React from 'react'
import renderer from 'react-test-renderer'
import { ThemeProvider } from '@hixme-ui/theme'
import Select from '../src/Select'
import SelectBase from '../src/SelectBase'

test('SelectBase', () => {
  const component = renderer.create((
    <ThemeProvider>
      <SelectBase>
        <option value='test'>Test</option>
      </SelectBase>
    </ThemeProvider>
  ))

  const tree = component.toJSON()
  expect(tree.type).toBe('select')
})

test('Select', () => {
  const component = renderer.create(
    (<ThemeProvider><Select list={[{ id: 0, name: 'name' }]} /></ThemeProvider>),
  )

  const tree = component.toJSON()
  expect(tree.type).toBe('select')
  expect(tree.children).toBeDefined()
  expect(tree.children[0].type).toBe('option')
})

test('Select with children', () => {
  const component = renderer.create((
    <ThemeProvider>
      <Select>
        <option value='test'>Test</option>
      </Select>
    </ThemeProvider>
  ))

  const tree = component.toJSON()
  expect(tree.type).toBe('select')
  expect(tree.children).toBeDefined()
  expect(tree.children[0].type).toBe('option')
})
