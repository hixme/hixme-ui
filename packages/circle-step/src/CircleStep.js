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
  openCircle,
  size,
  uncompletedColor,
}) => (
  <div>
    {completed ? (
      <Container flex noPadding alignItems='center'>
        <Icon primary checkMarkCircle fontSize={size} />
      </Container>
    ) : (
      <Container
        flex
        noPadding
        height={`${size}px`}
        width={`${size}px`}
        margin='0'
        style={{
          borderRadius: '50%',
          backgroundColor: !openCircle && uncompletedColor,
          border: openCircle && `${borderWidth} solid ${uncompletedColor}`,
        }}
      >
        {children && (
          <Title thin white small style={{ margin: '4px auto 0' }}>
            {children}
          </Title>
        )}
      </Container>
    )}
  </div>
)

CircleStep.displayName = 'CircleStep'
CircleStep.propTypes = {
  borderWidth: PropTypes.string,
  children: PropTypes.node,
  completed: PropTypes.bool,
  openCircle: PropTypes.bool,
  size: PropTypes.number,
  uncompletedColor: PropTypes.string,
}

CircleStep.defaultProps = {
  borderWidth: '3px',
  children: null,
  completed: false,
  openCircle: false,
  size: 48,
  uncompletedColor: '#677786',
}

export default CircleStep
