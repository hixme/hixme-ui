// import React from 'react'
// import renderer from 'react-test-renderer'
// import { ThemeProvider } from '@hixme-ui/theme'
import 'jest-styled-components'

import UploadBox from '../src/index'

describe('UploadBox', () => {
  // test('Should render okay', () => {
  //   const component = renderer.create(
  //     <ThemeProvider>
  //       <UploadBox />
  //     </ThemeProvider>,
  //   )

  //   const tree = component.toJSON()
  //   expect(tree).toBeDefined()
  // })

  describe('Props', () => {
    test('Should take compact prop', () => {
      expect(UploadBox.propTypes.compact).toBeDefined()
    })

    test('Should take onDrop prop', () => {
      expect(UploadBox.propTypes.onDrop).toBeDefined()
    })

    test('Should take value prop', () => {
      expect(UploadBox.propTypes.value).toBeDefined()
    })

    test('Should have compact default prop of false', () => {
      expect(UploadBox.defaultProps.compact).toEqual(false)
    })

    test('Should have onDrop default prop of function', () => {
      expect(UploadBox.defaultProps.onDrop).toBeInstanceOf(Function)
    })

    test('Should have value default prop of \'\'', () => {
      expect(UploadBox.defaultProps.value).toEqual('')
    })
  })
})
