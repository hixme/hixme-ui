import React from 'react'
import renderer from 'react-test-renderer'
import { ThemeProvider } from '@hixme-ui/theme'
import 'jest-styled-components'

import Container from '../src/index'

describe('Container', () => {
  test('it renders', () => {
    const component = renderer.create(
      <ThemeProvider><Container /></ThemeProvider>,
    )

    const tree = component.toJSON()
    expect(tree.type).toBe('div')
  })

  test('it has 20px padding by default', () => {
    const component = renderer.create(
      <ThemeProvider><Container /></ThemeProvider>,
    )

    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
    expect(tree).toHaveStyleRule('padding', '20px')
  })

  test('it renders with a 1px solid red outline when withOutline is true', () => {
    const component = renderer.create(
      <ThemeProvider><Container withOutline /></ThemeProvider>,
    )

    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
    expect(tree).toHaveStyleRule('outline', '1px solid red')
  })

  test('it should contain 30px padding and margin: 2px 8px 3px 7px', () => {
    const component = renderer.create(
      <ThemeProvider><Container padding='30px' margin='2px 8px 3px 7px' /></ThemeProvider>,
    )

    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
    expect(tree).toHaveStyleRule('padding', '30px')
    expect(tree).toHaveStyleRule('margin', '2px 8px 3px 7px')
  })

  test('it should render with 80px left and right margins and padding', () => {
    const component = renderer.create(
      <ThemeProvider><Container paddingSides='80px' marginSides='80px' /></ThemeProvider>,
    )

    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
    expect(tree).toHaveStyleRule('margin-left', '80px')
    expect(tree).toHaveStyleRule('margin-right', '80px')
    expect(tree).toHaveStyleRule('padding-left', '80px')
    expect(tree).toHaveStyleRule('padding-right', '80px')
  })

  test('it should render with left padding of 30px', () => {
    const component = renderer.create(
      <ThemeProvider><Container padding='10px' paddingLeft='30px' /></ThemeProvider>,
    )

    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
    expect(tree).toHaveStyleRule('padding-left', '30px')
  })

  test('it should render with right padding of 90px', () => {
    const component = renderer.create(
      <ThemeProvider><Container padding='10px' paddingRight='90px' /></ThemeProvider>,
    )

    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
    expect(tree).toHaveStyleRule('padding-right', '90px')
  })

  test('it should render with bottom padding of 16px', () => {
    const component = renderer.create(
      <ThemeProvider><Container padding='10px' paddingBottom='16px' /></ThemeProvider>,
    )

    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
    expect(tree).toHaveStyleRule('padding-bottom', '16px')
  })

  test('it should render with top padding of 36px', () => {
    const component = renderer.create(
      <ThemeProvider><Container padding='10px' paddingTop='36px' /></ThemeProvider>,
    )

    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
    expect(tree).toHaveStyleRule('padding-top', '36px')
  })

  test('it should render with left margin of 30px', () => {
    const component = renderer.create(
      <ThemeProvider><Container margin='10px' marginLeft='30px' /></ThemeProvider>,
    )

    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
    expect(tree).toHaveStyleRule('margin-left', '30px')
  })

  test('it should render with right margin of 90px', () => {
    const component = renderer.create(
      <ThemeProvider><Container margin='10px' marginRight='90px' /></ThemeProvider>,
    )

    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
    expect(tree).toHaveStyleRule('margin-right', '90px')
  })

  test('it should render with bottom margin of 16px', () => {
    const component = renderer.create(
      <ThemeProvider><Container margin='10px' marginBottom='16px' /></ThemeProvider>,
    )

    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
    expect(tree).toHaveStyleRule('margin-bottom', '16px')
  })

  test('it should render with top margin of 36px', () => {
    const component = renderer.create(
      <ThemeProvider><Container margin='10px' marginTop='36px' /></ThemeProvider>,
    )

    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
    expect(tree).toHaveStyleRule('margin-top', '36px')
  })

  test('it should contain 100px width and 200px height', () => {
    const component = renderer.create(
      <ThemeProvider><Container width='100px' height='200px' /></ThemeProvider>,
    )

    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
    expect(tree).toHaveStyleRule('width', '100px')
    expect(tree).toHaveStyleRule('height', '200px')
  })

  test('it should contain a min-width of 20px and max-width of 100px', () => {
    const component = renderer.create(
      <ThemeProvider><Container minWidth='20px' maxWidth='100px' /></ThemeProvider>,
    )

    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
    expect(tree).toHaveStyleRule('min-width', '20px')
    expect(tree).toHaveStyleRule('max-width', '100px')
  })

  test('it should contain a min-height of 20px and max-height of 100px', () => {
    const component = renderer.create(
      <ThemeProvider><Container minHeight='20px' maxHeight='100px' /></ThemeProvider>,
    )

    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
    expect(tree).toHaveStyleRule('min-height', '20px')
    expect(tree).toHaveStyleRule('max-height', '100px')
  })

  test('it should contain text-align: left', () => {
    const component = renderer.create(
      <ThemeProvider><Container margin='20px' textAlign='left' /></ThemeProvider>,
    )

    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
    expect(tree).toHaveStyleRule('margin', '20px')
    expect(tree).toHaveStyleRule('text-align', 'left')
  })

  test('it should contain text-align: left again', () => {
    const component = renderer.create(
      <ThemeProvider><Container margin='20px' textLeft /></ThemeProvider>,
    )

    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
    expect(tree).toHaveStyleRule('margin', '20px')
    expect(tree).toHaveStyleRule('text-align', 'left')
  })

  test('it should contain text-align: center again', () => {
    const component = renderer.create(
      <ThemeProvider><Container margin='20px' textCenter /></ThemeProvider>,
    )

    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
    expect(tree).toHaveStyleRule('margin', '20px')
    expect(tree).toHaveStyleRule('text-align', 'center')
  })

  test('it should contain text-align: right', () => {
    const component = renderer.create(
      <ThemeProvider><Container margin='20px' textRight /></ThemeProvider>,
    )

    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
    expect(tree).toHaveStyleRule('margin', '20px')
    expect(tree).toHaveStyleRule('text-align', 'right')
  })

  test('it should render with border: 130px solid purple', () => {
    const component = renderer.create(
      <ThemeProvider><Container border='130px solid purple' /></ThemeProvider>,
    )

    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
    expect(tree).toHaveStyleRule('border', '130px solid purple')
  })

  test('it should render with 6px border radius', () => {
    const component = renderer.create(
      <ThemeProvider><Container rounded /></ThemeProvider>,
    )

    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
    expect(tree).toHaveStyleRule('border-radius', '6px')
  })

  test('it should render with 2 pixel dashed border', () => {
    const component = renderer.create(
      <ThemeProvider><Container dashed /></ThemeProvider>,
    )

    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
    expect(tree).toHaveStyleRule('border', '2px dashed')
  })

  test('it should render a red border-color', () => {
    const component = renderer.create(
      <ThemeProvider><Container borderColor='red' /></ThemeProvider>,
    )

    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
    expect(tree).toHaveStyleRule('border-color', 'red')
  })

  test('it should render a green bottom border', () => {
    const component = renderer.create(
      <ThemeProvider><Container borderBottom='1px solid green' /></ThemeProvider>,
    )

    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
    expect(tree).toHaveStyleRule('border-bottom', '1px solid green')
  })

  test('it should render with background: black', () => {
    const component = renderer.create(
      <ThemeProvider><Container background='black' /></ThemeProvider>,
    )

    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
    expect(tree).toHaveStyleRule('background', 'black')
  })

  test('it should render with display: flex', () => {
    const component = renderer.create(
      <ThemeProvider><Container flex /></ThemeProvider>,
    )

    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
    expect(tree).toHaveStyleRule('display', 'flex')
  })

  test('it should render with justify-content: flex-start', () => {
    const component = renderer.create(
      <ThemeProvider><Container flex justifyStart /></ThemeProvider>,
    )

    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
    expect(tree).toHaveStyleRule('display', 'flex')
    expect(tree).toHaveStyleRule('justify-content', 'flex-start')
  })

  test('it should render with align-items: center', () => {
    const component = renderer.create(
      <ThemeProvider><Container flex alignCenter /></ThemeProvider>,
    )

    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
    expect(tree).toHaveStyleRule('display', 'flex')
    expect(tree).toHaveStyleRule('align-items', 'center')
  })

  test('it should render with flex-direction: column', () => {
    const component = renderer.create(
      <ThemeProvider><Container flexColumn /></ThemeProvider>,
    )

    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
    expect(tree).toHaveStyleRule('display', 'flex')
    expect(tree).toHaveStyleRule('flex-direction', 'column')
  })

  test('it renders with no padding when noPadding is true', () => {
    const component = renderer.create(
      <ThemeProvider><Container noPadding /></ThemeProvider>,
    )

    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
    expect(tree).toHaveStyleRule('padding', '0')
  })

  test('it should render with opacity .6', () => {
    const component = renderer.create(
      <ThemeProvider><Container opacity='.6' /></ThemeProvider>,
    )

    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
    expect(tree).toHaveStyleRule('opacity', '.6')
  })
})
