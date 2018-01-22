import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Collapsible from 'react-collapsible'
import { Grid, Row, Col } from 'react-flexbox-grid'

// hixme-ui
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

  constructor(props) {
    super(props)
    this.state = {
      open: props.open,
    }
  }

  render() {
    const {
      cardContent,
      cardHeader,
      collapsible,
      children,
      disabled,
      hideArrow,
    } = this.props

    const {
      open,
    } = this.state

    const toggleDrawer = () => {
      this.setState(prevState => ({
        open: !prevState.open,
      }))
    }

    return (
      <Disabled disabled={disabled}>
        {collapsible ?
          <Collapsible
            easing='ease'
            open={open}
            handleTriggerClick={toggleDrawer}
            contentInnerClassName={ContentInnerClassName}
            triggerClassName={TriggerClassName}
            triggerOpenedClassName={TriggerClassName}
            trigger={
              <StyledTrigger open={open} rounded shadow className={TriggerClassName}>
                <Grid fluid>
                  {hideArrow ?
                    <Row middle='xs'>
                      <Col xs={12}>{cardHeader}</Col>
                    </Row> :
                    <Row middle='xs'>
                      <Col xs={11}>{cardHeader}</Col>
                      <Col xs={1}>
                        <ChevronRow open={open} center='xs' style={{ margin: '0 0 7px 0' }}>
                          <Icon arrowRight size={1.25} />
                        </ChevronRow>
                      </Col>
                    </Row>
                  }
                </Grid>
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
