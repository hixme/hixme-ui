import React, { Component, Fragment } from 'react'

import Container from '@hixme-ui/container'
import CloseButton from '@hixme-ui/close-button'
import Text from '@hixme-ui/text'
import Animate from '@hixme-ui/animate'

import { Code, DocsTitle } from '../../components'

class ContainerDocs extends Component {
  state = { animating: false }

  somethingCool = () => {
    this.setState({ animating: true })
    window.setTimeout(this.reset, 1000)
  }

  reset = () => this.setState({ animating: false })

  render() {
    const Instructions = () => <Text div purple large>Clicking the close button will do something cool</Text>
    return (
      <Fragment>
        <DocsTitle title='CloseButton' subtitle='A CloseButton for your Modal or any other needs' />
        <Container textCenter>
          {this.state.animating ? (
            <Animate jello trigger>
              <Instructions />
            </Animate>
          ) : (
            <Instructions />
          )}
        </Container>
        <Container flex>
          <CloseButton onClick={this.somethingCool} />
        </Container>
        <Code>
          {'<CloseButton onClick={this.somethingCool} />'}
        </Code>
      </Fragment>
    )
  }
}

export default ContainerDocs

