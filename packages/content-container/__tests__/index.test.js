import React from 'react'
import renderer from 'react-test-renderer'
import { ThemeProvider } from '@hixme-ui/theme'
import ContentContainer from '../src/index'

const myChildren = 'Chosen one'

describe('ContentContainer', () => {
  it('Should render a div', () => {
    const component = renderer
      .create(
        (
          <ThemeProvider>
            <ContentContainer>
              {myChildren}
            </ContentContainer>
          </ThemeProvider>
        ),
      )
      .toJSON()

    expect(component.type).toEqual('div')
  })

  it('Should render children', () => {
    const component = renderer
      .create(
        (
          <ThemeProvider>
            <ContentContainer>
              {myChildren}
            </ContentContainer>
          </ThemeProvider>
        ),
      )
      .toJSON()

    expect(component.children[0]).toEqual(myChildren)
  })
})
