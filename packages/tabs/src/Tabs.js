import React from 'react'
import PropTypes from 'prop-types'

// hixme-ui
import Text from '@hixme-ui/text'
import Container from '@hixme-ui/container'

import LineTab from './tab-types'

class Tabs extends React.Component {
  state = {
    id: this.props.id,
    activeIndex: this.props.initWithIndex,
  }

  handleTabClick = (clickedIndex) => {
    this.setState({
      activeIndex: clickedIndex,
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
              <LineTab blue active={this.state.activeIndex === index}>
                <Text
                  style={{ outline: 'none' }}
                  a
                  tabIndex={index + 1}
                  black={this.state.activeIndex === index}
                  light={this.state.activeIndex !== index}
                  cursor='pointer'
                  onClick={() => this.handleTabClick(index)}
                  onFocus={() => this.handleTabClick(index)}
                >
                  {tab.name}
                </Text>
              </LineTab>
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
            if (this.state.activeIndex === index) {
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
