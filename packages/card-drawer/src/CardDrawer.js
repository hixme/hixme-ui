import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Collapsible from 'react-collapsible'

// hixme-ui
import Container from '@hixme-ui/container'
import Icon from '@hixme-ui/icon'

// Styled components
import ChevronRow from './ChevronRow'
import Disabled from './Disabled'
import InnerContent from './InnerContent'
import StyledCard from './StyledCard'
import StyledTrigger from './StyledTrigger'

// Collapsible class names
const ContentInnerClassName = 'Collapsible__contentInner'
const TriggerClassName = 'Collapsible__trigger'

class CardDrawer extends Component {
  static propTypes = {
    cardContent: PropTypes.node,
    cardHeader: PropTypes.node,
    children: PropTypes.node,
    hideArrow: PropTypes.bool,
    collapsible: PropTypes.bool,
    open: PropTypes.bool,
    disabled: PropTypes.bool,
  }

  static defaultProps = {
    cardContent: null,
    cardHeader: null,
    children: null,
    hideArrow: false,
    collapsible: false,
    open: true,
    disabled: false,
  }

  state = { stateOpen: this.props.open }

  render() {
    const {
      cardContent,
      cardHeader,
      collapsible,
      open,
      children,
      disabled,
      hideArrow,
    } = this.props

    const {
      stateOpen,
    } = this.state

    const toggleDrawer = () => {
      this.setState(prevState => ({
        stateOpen: !prevState.stateOpen,
      }))
    }

    return (
      <Disabled disabled={disabled}>
        {collapsible ?
          <Collapsible
            easing='ease'
            open={stateOpen}
            handleTriggerClick={toggleDrawer}
            contentInnerClassName={ContentInnerClassName}
            triggerClassName={TriggerClassName}
            triggerOpenedClassName={TriggerClassName}
            trigger={
              <StyledTrigger open={stateOpen} rounded shadow className={TriggerClassName}>
                {hideArrow ?
                  <Container flex noPadding alignCenter>
                    {cardHeader}
                  </Container> :
                  <Container flex noPadding justifySpaceBetween alignCenter>
                    <Container flex noPadding flexGrow={1}>{cardHeader}</Container>
                    <ChevronRow open={stateOpen} center='xs'>
                      <Icon arrowRight size={1.25} />
                    </ChevronRow>
                  </Container>
                }
              </StyledTrigger>
            }
            transitionTime={250}
          >
            <InnerContent className={ContentInnerClassName}>
              {cardContent || children}
            </InnerContent>
          </Collapsible> :
          <div>
            <StyledCard round shadow open={open}>
              {cardHeader}
            </StyledCard>
            {open &&
              <InnerContent className={ContentInnerClassName}>
                {cardContent || children}
              </InnerContent>
            }
          </div>
        }
      </Disabled>
    )
  }
}

CardDrawer.displayName = 'hui:CardDrawer'
CardDrawer.huiName = 'CardDrawer'

export default CardDrawer
