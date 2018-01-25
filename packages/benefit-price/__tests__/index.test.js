import React from 'react'
import renderer from 'react-test-renderer'
import { ThemeProvider } from '@hixme-ui/theme'
import BenefitPrice from '../src/index'
import 'jest-styled-components'

describe('BenefitPrice', () => {
  test('it renders', () => {
    const benefitPrice = renderer.create(<ThemeProvider><BenefitPrice value={100} /></ThemeProvider>)

    const tree = benefitPrice.toJSON()
    expect(tree.type).toBe('div')
  })

  test('it has 0px padding by default', () => {
    const component = renderer.create(
      <ThemeProvider><BenefitPrice value={4321} /></ThemeProvider>,
    )

    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
    expect(tree).toHaveStyleRule('padding', '0')
  })

  test('it should render with background: none', () => {
    const component = renderer.create(
      <ThemeProvider><BenefitPrice value={4321} /></ThemeProvider>,
    )

    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
    expect(tree).toHaveStyleRule('background', 'none')
  })

  test('it should render with display: flex', () => {
    const component = renderer.create(
      <ThemeProvider><BenefitPrice value={4321} /></ThemeProvider>,
    )

    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
    expect(tree).toHaveStyleRule('display', 'flex')
  })
})
