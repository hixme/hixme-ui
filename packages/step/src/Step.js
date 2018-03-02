import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// hixme-ui
import Icon from '@hixme-ui/icon'
import Title from '@hixme-ui/title'
import theme from '@hixme-ui/theme'

const Circle = styled.div`
  display: flex;
  height: 48px;
  width: 48px;
  background-color: ${({ color }) => (color || theme.colors.light)};
  border-radius: 50%;
  margin: 0;
  justify-content: center;
  align-items: center;
`

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Step = ({
  children,
  completed,
  uncompletedColor,
}) => (
  <IconContainer>
    {completed ?
      <Icon primary checkMarkCircle fontSize={48} /> :
      <Circle color={uncompletedColor}>
        <Title thin white small>{children}</Title>
      </Circle>
    }
  </IconContainer>
)

Step.displayName = 'Step'
Step.propTypes = {
  children: PropTypes.node.isRequired,
  completed: PropTypes.bool,
  uncompletedColor: PropTypes.string,
}

Step.defaultProps = {
  completed: false,
  uncompletedColor: null,
}

export default Step
