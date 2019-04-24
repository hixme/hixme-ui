import React from 'react'
import PropTypes from 'prop-types'

// hixme-ui
import Container from '@hixme-ui/container'
import Icon from '@hixme-ui/icon'
import Title from '@hixme-ui/title'

const CircleStep = ({
  borderWidth,
  children,
  completed,
  display,
  openCircle,
  size,
  uncompletedColor,
}) => (
  <div>
    {completed ? (
      <Container flex noPadding justifyContent='center' alignItems='center'>
        <Icon primary checkMarkCircle fontSize={size} />
      </Container>
    ) : (
      <div
        style={{
          display,
          height: `${size}px`,
          width: `${size}px`,
          borderRadius: '50%',
          margin: '0',
          backgroundColor: !openCircle && uncompletedColor,
          border: openCircle && `${borderWidth} solid ${uncompletedColor}`,
        }}
      >
        {children && (
          <Title thin white small style={{ margin: '4px 0 0 0' }}>
            {children}
          </Title>
        )}
      </div>
    )}
  </div>
)

CircleStep.displayName = 'CircleStep'
CircleStep.propTypes = {
  borderWidth: PropTypes.string,
  children: PropTypes.node,
  completed: PropTypes.bool,
  display: PropTypes.string,
  openCircle: PropTypes.bool,
  size: PropTypes.number,
  uncompletedColor: PropTypes.string,
}

CircleStep.defaultProps = {
  borderWidth: '3px',
  children: null,
  completed: false,
  display: 'inline-block',
  openCircle: false,
  size: 48,
  uncompletedColor: '#677786',
}

export default CircleStep
