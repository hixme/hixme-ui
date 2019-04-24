import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// hixme-ui
import Icon from '@hixme-ui/icon'
import Title from '@hixme-ui/title'

const Circle = styled.div`
  display: flex;
  height: ${({ size }) => `${size}px` || '48px'};
  width: ${({ size }) => `${size}px` || '48px'};
  background-color: ${({ color, openCircle }) => !openCircle && color};
  border-radius: 50%;
  border: ${({ openCircle, color, width }) =>
    openCircle && `${width} solid ${color}`};
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
  borderWidth,
  children,
  completed,
  openCircle,
  size,
  uncompletedColor,
}) => (
  <IconContainer>
    {completed ? (
      <Icon primary checkMarkCircle fontSize={size} />
    ) : (
      <Circle
        color={uncompletedColor}
        size={size}
        openCircle={openCircle}
        width={borderWidth}
      >
        {children && (
          <Title thin white small>
            {children}
          </Title>
        )}
      </Circle>
    )}
  </IconContainer>
)

Step.displayName = 'Step'
Step.propTypes = {
  borderWidth: PropTypes.string,
  children: PropTypes.node,
  completed: PropTypes.bool,
  openCircle: PropTypes.bool,
  size: PropTypes.number,
  uncompletedColor: PropTypes.string,
}

Step.defaultProps = {
  borderWidth: '3px',
  children: null,
  completed: false,
  openCircle: false,
  size: 48,
  uncompletedColor: '#677786',
}

export default Step
