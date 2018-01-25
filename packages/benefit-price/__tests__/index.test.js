import React from 'react'
import renderer from 'react-test-renderer'
import chai from 'chai'
import { ThemeProvider } from '@hixme-ui/theme'
import BenefitPrice from '../src/index'
import getLabel from '../src/getLabel'
import getPrice from '../src/getPrice'
import 'jest-styled-components'

describe('getPrice: Should calculate price for the given pay cycle', () => {
  describe('Default Export', () => {
    const { expect } = chai
    
    test('Should be of type function', () => {
      expect(getPrice).to.be.an('function')
    })
    test('Correctly calculates price for a sample values', () => {
      expect(getPrice(78, 26)).to.equal(36)
    })
  })
})

describe('getLabel: Should return the associated string label for the given pay cycle', () => {
  describe('Default Export', () => {
    const { expect } = chai
    
    test('Should be of type function', () => {
      expect(getPrice).to.be.an('function')
    })
    test('monthly', () => {
      expect(getLabel(12)).to.equal('monthly')
    })
    test('semi-monthly', () => {
      expect(getLabel(24)).to.equal('semi-monthly')
    })
    test('bi-weekly', () => {
      expect(getLabel(26)).to.equal('bi-weekly')
    })
    test('weekly', () => {
      expect(getLabel(52)).to.equal('weekly')
    })
 })
})

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
