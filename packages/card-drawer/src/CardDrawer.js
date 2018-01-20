import React from 'react'
import PropTypes from 'prop-types'
import Collapsible from 'react-collapsible'
import { Row, Col } from 'react-flexbox-grid'

// hixme-ui
import Card from '@hixme-ui/card'
import Icon from '@hixme-ui/icon'

import Disabled from './Disabled'

const CardDrawer = ({
  cardContent,
  cardHeader,
  collapsible,
  disabled,
  hideArrow,
  open,
}) => {
  const cardClass = open ? classes.cardOpen : classes.cardClosed
  return (
    <Disabled disabled={disabled}>
      {collapsible ?
        <Collapsible
          easing='ease'
          open
          triggerClassName={classes.trigger}
          triggerOpenedClassName={classes.triggerOpen}
          contentInnerClassName={classes.innerContent}
          contentOuterClassName={classes.outerContent}
          trigger={
            <Card className={classes.card} rounded shadow>
              {hideArrow ?
                <Row middle='xs'>
                  <Col xs={12}>{cardHeader}</Col>
                </Row> :
                <Row middle='xs'>
                  <Col xs={11}>{cardHeader}</Col>
                  <Col xs={1}>
                    <Row className={classes.downIcon} center='xs' style={{ margin: '0 0 7px 0' }}>
                      <Icon arrowRight size={1.25} />
                    </Row>
                  </Col>
                </Row>
            }
            </Card>
          }
          transitionTime={250}
        >
          <div>
            {cardContent}
          </div>
        </Collapsible> :
        <div>
          <Card className={cardClass} round shadow>
            {cardHeader}
          </Card>
          {open &&
          <div className={classes.innerContent}>
            {cardContent}
          </div>
        }
        </div>
      }
    </Disabled>
  )
}

CardDrawer.propTypes = {
  cardContent: PropTypes.node,
  cardHeader: PropTypes.node,
  hideArrow: PropTypes.bool,
  collapsible: PropTypes.bool,
  open: PropTypes.bool,
  disabled: PropTypes.bool,
}

CardDrawer.defaultProps = {
  cardContent: null,
  cardHeader: null,
  hideArrow: false,
  collapsible: false,
  open: true,
  disabled: false,
}

CardDrawer.displayName = 'hui:CardDrawer'
CardDrawer.huiName = 'CardDrawer'

export default CardDrawer
