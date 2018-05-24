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
      <Container
        flex
        noPadding
        direction={this.props.direction === 'row' ? 'column' : 'row'}
        width='100%'
        height='100%'
      >
        <Container flex noPadding direction={this.props.direction}>
          {this.props.list && this.props.list.map((tab, index) => (
            <Container
              flex
              noPadding
              key={`${tab.name}${this.props.id}tab`}
              margin='0 20px 0 0'
            >
              <div style={{ height: this.props.height }}>
                <LineTab
                  onClick={() => this.handleTabClick(index)}
                  onFocus={() => this.handleTabClick(index)}
                  {...this.props.tabStyles}
                  active={this.state.activeIndex === index}
                >
                  <Text
                    style={{ outline: 'none', width: '100%' }}
                    a
                    tabIndex={index + 1}
                    black={this.state.activeIndex === index}
                    light={this.state.activeIndex !== index}
                    cursor='pointer'
                  >
                    {tab.name}
                  </Text>
                </LineTab>
              </div>
            </Container>
            ))}
        </Container>
        <Container
          flex
          noPadding
          direction={this.props.direction}
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
  direction: PropTypes.string,
  height: PropTypes.string,
  id: PropTypes.string.isRequired,
  initWithIndex: PropTypes.number,
  list: PropTypes.array.isRequired,
  tabStyles: PropTypes.object,
}

Tabs.defaultProps = {
  initWithIndex: 0,
  styles: {},
  direction: 'row',
  tabStyles: {},
  height: 'auto',
}

export default Tabs
