import React from 'react'
import PropTypes from 'prop-types'

// hixme-ui
import Text from '@hixme-ui/text'
import Container from '@hixme-ui/container'
import theme from '@hixme-ui/theme'

import StyledTab from './StyledTab'

const {
  backgroundColors,
} = theme

class Tabs extends React.Component {
  constructor() {
    super()
    this.state = {
      tabIndex: 0,
    }
  }

  componentDidMount() {
    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({
      tabIndex: this.props.initWithIndex,
    })
  }

  handleTabClick = (clickedIndex) => {
    this.setState({
      tabIndex: clickedIndex,
    })
  }

  render() {
    return (
      <Container flex noPadding direction='column' width='100%' height='100%'>
        <Container flex noPadding>
          {this.props.list && this.props.list.map((tab, index) => (
            <Container
              flex
              noPadding
              key={`${tab.name}${this.props.id}tab`}
              margin='0 20px 0 0'
            >
              <StyledTab blue active={this.state.tabIndex === index}>
                <Text
                  light={this.state.tabIndex !== index}
                  cursor='pointer'
                  onClick={() => this.handleTabClick(index)}
                >
                  {tab.name}
                </Text>
              </StyledTab>
            </Container>
            ))}
        </Container>
        <Container
          flex
          noPadding
          margin='20px 0 0 0'
          height='100%'
          width='100%'
        >
          {this.props.list && this.props.list.map((tab, index) => {
            if (this.state.tabIndex === index) {
              return (
                <div
                  key={`${tab.name}${this.props.id}content`}
                  style={{ width: '100%' }}
                >
                  {tab.content}
                </div>
              )
            }
            return null
          })}
        </Container>
      </Container>
    )
  }
}

Tabs.displayName = 'Tabs'

Tabs.propTypes = {
  id: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired,
  initWithIndex: PropTypes.number,
}

Tabs.defaultProps = {
  initWithIndex: 0,
}

export default Tabs
