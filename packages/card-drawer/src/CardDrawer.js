import React from 'react'
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

const CardDrawer = ({
  cardContent,
  cardHeader,
  collapsible,
  disabled,
  hideArrow,
  open,
}) => (
  <Disabled disabled={disabled}>
    {collapsible ?
      <Collapsible
        easing='ease'
        open
        trigger={
          <StyledTrigger rounded shadow>
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
        <div>
          {cardContent}
        </div>
      </Collapsible> :
      <div>
        <StyledCard round shadow open={open}>
          {cardHeader}
        </StyledCard>
        {open &&
          <InnerContent>
            {cardContent}
          </InnerContent>
        }
      </div>
      }
  </Disabled>
)

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
