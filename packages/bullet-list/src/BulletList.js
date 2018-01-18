import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// hixme-ui
import Container from '@hixme-ui/container'
import Text from '@hixme-ui/text'

const Circle = styled.span`
  borderRadius: 50%;
  width: 6px;
  height: 6px;
  background: #2eae8f;
  margin: 10px 10px 2px 10px;
`

const LineContainer = styled.div`
  line-height: 25px;
`

const BulletList = ({
  bulletArray,
  ...restProps
}) => (
  <LineContainer>
    {bulletArray.map(item => (
      <Container flex noPadding id='bullet-item' key={item.key}>
        <Container flex noPadding>
          <Circle />
        </Container>
        <Text {...restProps}>
          {item}
        </Text>
      </Container>
    ))}
  </LineContainer>
)

BulletList.propTypes = {
  bulletArray: PropTypes.array.isRequired,
}

export default BulletList

