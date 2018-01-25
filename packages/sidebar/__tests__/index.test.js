import React from 'react'
import renderer from 'react-test-renderer'
import { ThemeProvider } from '@hixme-ui/theme'
import 'jest-styled-components'

import Sidebar from '../src/index'

describe('Sidebar', () => {
  test('Should render okay', () => {
    const component = renderer.create(
      <ThemeProvider>
        <Sidebar onClose={() => null}>
          content
        </Sidebar>
      </ThemeProvider>,
    )

    const tree = component.toJSON()
    expect(tree.type).toBe('div')
  })

  describe('Props', () => {
    test('Should take open prop', () => {
      expect(Sidebar.propTypes.open).toBeDefined()
    })

    test('Should take onClose prop', () => {
      expect(Sidebar.propTypes.onClose).toBeDefined()
    })

    test('Should take sidebarWidth prop', () => {
      expect(Sidebar.propTypes.sidebarWidth).toBeDefined()
    })

    test('Should take children prop', () => {
      expect(Sidebar.propTypes.children).toBeDefined()
    })

    test('Should take topOffset prop', () => {
      expect(Sidebar.propTypes.topOffset).toBeDefined()
    })

    test('Should take style prop', () => {
      expect(Sidebar.propTypes.style).toBeDefined()
    })

    test('Should have header default prop of \'\'', () => {
      expect(Sidebar.defaultProps.header).toEqual('')
    })

    test('Should have open default prop of false', () => {
      expect(Sidebar.defaultProps.open).toEqual(false)
    })

    test('Should have sidebarWidth default prop of \'300px\'', () => {
      expect(Sidebar.defaultProps.sidebarWidth).toEqual('300px')
    })

    test('Should have style default prop of {}', () => {
      expect(Sidebar.defaultProps.style).toEqual({})
    })

    test('Should have topOffset default prop of 58', () => {
      expect(Sidebar.defaultProps.topOffset).toEqual(58)
    })
  })
})
