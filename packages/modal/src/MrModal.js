import React from 'react'
import Modal from 'react-modal'
import PropTypes from 'prop-types'
import { Grid, Row, Col } from 'react-flexbox-grid'

// hixme-ui
import Button from '@hixme-ui/button'
import CloseButton from '@hixme-ui/close-button'
import Title from '@hixme-ui/title'

const MrModal = ({
  backgroundColor,
  children,
  hideCloseButton,
  isOpen,
  handleClose,
  style,
  title,
  zIndex,
  transparent,

  // Content align
  contentCenter,
  contentEnd,

  // Content spacing
  contentPadding,

  // Vertical align
  middle,
  bottom,

  // Sizes
  small,
  medium,
  large,

  // Dialog presets
  cancelHandler,
  cancelLabel,
  cancelProcessing,
  cancelSubmittingText,
  confirmHandler,
  confirmLabel,
  confirmProcessing,
  confirmSubmittingText,
  dialog,
  errorDialog,

  ...restProps
}) => {
  const getButtonGrid = () => {
    if (small) {
      return {
        xs: 12,
        sm: 6,
      }
    } else if (medium) {
      return {
        xs: 12,
        sm: 6,
        md: 4,
      }
    } else if (large) {
      return {
        xs: 12,
        sm: 6,
        md: 4,
        lg: 2,
      }
    }
    return {
      xs: 12,
      sm: 6,
      md: 4,
      lg: 2,
    }
  }

  const getMrModalStyle = () => {
    const nonFullScreenStyle = {
      overlay: {
        zIndex,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'rgba(40, 48, 54, 0.8)',
      },
      content: {
        zIndex: zIndex + 1,
        maxHeight: '85vh',
        position: 'unset',
        margin: '30px',
        backgroundColor: backgroundColor || '#fff',
        border: '0',
        borderRadius: '6px',
        top: 'unset',
        right: 'unset',
        bottom: 'unset',
        left: 'unset',
      },
    }

    if (small) {
      return {
        ...nonFullScreenStyle,
        content: {
          ...nonFullScreenStyle.content,
          width: '568px',
        },
      }
    } else if (medium) {
      return {
        ...nonFullScreenStyle,
        content: {
          ...nonFullScreenStyle.content,
          width: '800px',
        },
      }
    } else if (large) {
      return {
        ...nonFullScreenStyle,
        content: {
          ...nonFullScreenStyle.content,
          width: '1024px',
        },
      }
    }
    return {
      overlay: {
        zIndex,
        backgroundColor: transparent ? 'transparent' : 'none',
      },
      content: {
        zIndex: zIndex + 1,
        height: '100%',
        width: '100%',
        border: '0',
        borderRadius: '0',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        backgroundColor: transparent ? 'rgba(40, 48, 54, 0.8)' : (backgroundColor || '#fff'),
      },
    }
  }

  const getAlign = () => {
    if (middle) return { middle: 'xs' }
    else if (bottom) return { bottom: 'xs' }
    return { top: 'xs' }
  }

  const getContentAlign = () => {
    if (contentCenter) return { center: 'xs' }
    else if (contentEnd) return { end: 'xs' }
    return { start: 'xs' }
  }

  return (
    <Modal
      style={style || getMrModalStyle()}
      isOpen={isOpen}
      onRequestClose={cancelHandler || handleClose}
      ariaHideApp
      shouldCloseOnEsc
      {...restProps}
    >
      <Grid fluid style={{ height: '100%', padding: '0', position: 'relative' }}>
        {!hideCloseButton &&
          <Row
            end='xs'
            style={{
              margin: '0',
              width: '100%',
              position: 'absolute',
              top: '0',
              right: '0',
            }}
          >
            <CloseButton onClick={cancelHandler || handleClose} />
          </Row>
        }
        <Row center='xs' {...getAlign()} style={{ height: '100%' }}>
          <Col xs={12} style={{ marginTop: (middle || bottom) ? '-50px' : '0' }}>
            <div style={{ padding: contentPadding || '0' }}>
              {title &&
                <Row center='xs' style={{ marginTop: '20px' }}>
                  <Col xs>
                    <Title small>{title}</Title>
                  </Col>
                </Row>
              }
              <Row {...getContentAlign()}>
                <Col xs={12}>
                  {children}
                </Col>
              </Row>
              {dialog &&
                <Row center='xs' style={{ marginTop: '20px' }}>
                  <Col {...getButtonGrid()} style={{ marginBottom: '10px' }}>
                    <Button
                      primary
                      block
                      onClick={confirmHandler}
                      submitting={confirmProcessing}
                      submittingText={confirmSubmittingText}
                    >
                      {confirmLabel}
                    </Button>
                  </Col>
                  <Col {...getButtonGrid()}>
                    <Button
                      secondary
                      block
                      onClick={cancelHandler || handleClose}
                      submitting={cancelProcessing}
                      submittingText={cancelSubmittingText}
                    >
                      {cancelLabel}
                    </Button>
                  </Col>
                </Row>
              }
              {errorDialog &&
                <Row center='xs' style={{ marginTop: '20px' }}>
                  <Col {...getButtonGrid()} style={{ marginBottom: '10px' }}>
                    <Button
                      red
                      block
                      onClick={confirmHandler}
                      submitting={confirmProcessing}
                      submittingText={confirmSubmittingText}
                    >
                      {confirmLabel}
                    </Button>
                  </Col>
                  <Col {...getButtonGrid()}>
                    <Button
                      secondary
                      block
                      onClick={cancelHandler || handleClose}
                      submitting={cancelProcessing}
                      submittingText={cancelSubmittingText}
                    >
                      {cancelLabel}
                    </Button>
                  </Col>
                </Row>
              }
            </div>
          </Col>
        </Row>
      </Grid>
    </Modal>
  )
}

MrModal.propTypes = {
  backgroundColor: PropTypes.string,
  children: PropTypes.node,
  handleClose: PropTypes.func,
  hideCloseButton: PropTypes.bool,
  isOpen: PropTypes.bool,
  style: PropTypes.object,
  title: PropTypes.string,
  transparent: PropTypes.bool,
  zIndex: PropTypes.number,

  // Content align
  contentCenter: PropTypes.bool,
  contentEnd: PropTypes.bool,

  // Content spacing
  contentPadding: PropTypes.string,

  // Vertical Align
  middle: PropTypes.bool,
  bottom: PropTypes.bool,

  // Sizes
  small: PropTypes.bool,
  medium: PropTypes.bool,
  large: PropTypes.bool,

  // Dialog presets
  cancelHandler: PropTypes.func,
  cancelLabel: PropTypes.string,
  cancelProcessing: PropTypes.bool,
  cancelSubmittingText: PropTypes.string,
  confirmHandler: PropTypes.func,
  confirmLabel: PropTypes.string,
  confirmProcessing: PropTypes.bool,
  confirmSubmittingText: PropTypes.string,
  dialog: PropTypes.bool,
  errorDialog: PropTypes.bool,
}

MrModal.defaultProps = {
  backgroundColor: null,
  children: <div />,
  handleClose: () => null,
  hideCloseButton: false,
  isOpen: false,
  // isProcessing: false,
  style: undefined,
  title: '',
  transparent: false,
  zIndex: 1001,

  // Content align
  contentCenter: false,
  contentEnd: false,

  // Content spacing
  contentPadding: null,

  // Vertical Align
  middle: false,
  bottom: false,

  // Sizes
  small: false,
  medium: false,
  large: false,

  // Dialog presets
  cancelHandler: undefined,
  cancelLabel: 'Cancel',
  cancelProcessing: false,
  cancelSubmittingText: Button.defaultProps.submittingText || 'Cancelling...',
  confirmHandler: () => console.log('Confirm click'), // eslint-disable-line
  confirmLabel: 'Ok',
  confirmProcessing: false,
  confirmSubmittingText: Button.defaultProps.submittingText || 'Submitting...',
  dialog: false,
  errorDialog: false,
}

MrModal.displayName = 'MrModal'

export default MrModal
