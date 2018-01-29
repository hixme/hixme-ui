import React from 'react'
import renderer from 'react-test-renderer'
import { ThemeProvider } from '@hixme-ui/theme'
import 'jest-styled-components'

import { FormatDate } from '../src/index'

describe('FormatDate', () => {
  test('Should render okay', () => {
    const component = renderer.create(
      <ThemeProvider>
        <FormatDate />
      </ThemeProvider>,
    )

    const tree = component.toJSON()
    expect(tree.type).toBe('time')
  })

  describe('isValid', () => {
    test('Should expose isValid() as a function', () => {
      expect(FormatDate.isValid).toBeInstanceOf(Function)
    })

    test('Should return false for 01/02/2000 when inputFormat is not supplied', () => {
      const isValid = FormatDate.isValid({ date: '01/02/2000' })
      expect(isValid).toEqual(false)
    })

    test('Should return true for 01/02/2000 when inputFormat is supplied', () => {
      const isValid = FormatDate.isValid({ date: '01/02/2000', inputFormat: 'DD/MM/YYYY' })
      expect(isValid).toEqual(true)
    })

    test('Should return false for 01/02/2000 when inputFormat does not match', () => {
      const isValid = FormatDate.isValid({ date: '01/02/2000', inputFormat: 'DD-MM-YYYY' })
      expect(isValid).toEqual(false)
    })

    test('Should return true for 20*2000*10 with matching inputFormat', () => {
      const isValid = FormatDate.isValid({ date: '20*2000*10', inputFormat: 'DD*YYYY*MM' })
      expect(isValid).toEqual(true)
    })

    test('Should return false for 20/20/2000 with matching inputFormat', () => {
      const isValid = FormatDate.isValid({ date: '20/20/2000', inputFormat: 'MM/DD/YYYY' })
      expect(isValid).toEqual(false)
    })
  })
})

