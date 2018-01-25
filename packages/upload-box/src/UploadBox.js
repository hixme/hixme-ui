import React from 'react'
import PropTypes from 'prop-types'
import Dropzone from 'react-dropzone'

import Container from '@hixme-ui/container'
import Icon from '@hixme-ui/icon'
import Text from '@hixme-ui/text'
import Title from '@hixme-ui/title'
import theme from '@hixme-ui/theme'

const { textColors } = theme

const dropzoneDefaultStyles = {
  width: '100%',
  backgroundColor: 'white',
  border: `2px dashed ${textColors.primary}`,
  borderRadius: '6px',
  padding: '20px 10px',
  textAlign: 'center',
  cursor: 'pointer',
}

const dropzoneActiveStyles = {
  border: `2px solid ${textColors.primary}`,
}

const UploadBox = ({
  compact,
  onDrop,
  value,
  ...restProps
}) => (
  <Dropzone
    onDrop={onDrop}
    style={dropzoneDefaultStyles}
    activeStyle={{ ...dropzoneDefaultStyles, ...dropzoneActiveStyles }}
    {...restProps}
  >
    {({ isDragActive }) => (
      <Container noPadding flex={compact} justifyCenter={compact} alignCenter={compact}>
        <div style={{ margin: compact ? '0 18px' : '0', position: 'relative', top: compact ? '6px' : '0' }}>
          <Icon cloudUpload lighter size={3.4} />
        </div>
        <div style={{ margin: compact ? '0 18px' : '0' }}>
          <Title smaller primary={isDragActive} style={{ margin: compact ? '0' : '0 0 0.9em' }}>Drag & Drop</Title>
          {value ?
            <Text primary fontSize='16px' style={{ textDecoration: 'underline' }}>{value}</Text> :
            <Text lighter fontSize='16px'>file here or <Text span dashed primary>browse</Text></Text>
          }
        </div>
      </Container>
    )}
  </Dropzone>
)

UploadBox.displayName = 'hui:UploadBox'
UploadBox.huiName = 'UploadBox'

UploadBox.propTypes = {
  compact: PropTypes.bool,
  onDrop: PropTypes.func,
  value: PropTypes.string,
}

UploadBox.defaultProps = {
  compact: false,
  onDrop: () => null,
  value: '',
}

export default UploadBox
