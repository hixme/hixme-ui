import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// hixme-ui
import Container from '@hixme-ui/container'
import Text from '@hixme-ui/text'

import { getBackgroundColor } from '@hixme-ui/theme-props'

const Circle = styled.div`
  border-radius: 3px;
  width: 6px;
  height: 6px;
  background: ${props => getBackgroundColor(props)};
  margin-right: 15px;
`

/* eslint-disable react/no-array-index-key */
const BulletList = ({
  bulletArray,
  ...restProps
}) => (
  <div>
    {bulletArray.map((item, index) => (
      <Container flex noPadding id='bullet-item' key={`bullet-list-${index}`} alignItems='center'>
        <div>
          <Circle {...restProps} />
        </div>
        <Text>{item}</Text>
      </Container>
    ))}
  </div>
)

BulletList.propTypes = {
  bulletArray: PropTypes.array.isRequired,
}

export default BulletList
