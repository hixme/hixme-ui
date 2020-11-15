import React from 'react'
import renderer from 'react-test-renderer'
import { ThemeProvider } from '@hixme-ui/theme'

import Price from '../src/index.js'
import { getValue } from '../src/Price.js'

const defaultProps = {
  label: '',
}

describe('Price', () => {
  test('Should render okay', () => {
    const component = renderer.create(
      (<ThemeProvider><Price value={46.93} /></ThemeProvider>),
    )

    const tree = component.toJSON()
    expect(tree.type).toBe('div')
  })

  test('Should have default props', () => {
    const component = renderer.create(
      (<ThemeProvider><Price value={46.93} /></ThemeProvider>),
    )
    const testInstance = component.root
    expect(testInstance.findByType(Price).props.label).toBe(defaultProps.label)
  })

})


describe('getPrice(()', () => {
  test('Should return dollars and cents', () => {
    const price = getValue(5.00)
    expect(price.dollars).toBe("5")
    expect(price.cents).toBe("00")
  })

  test('Should round cents properly', () => {
    const price = getValue(5.3950)
    expect(price.cents).toBe("40")
  })
})
