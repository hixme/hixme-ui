import React from 'react'
import PropTypes from 'prop-types'
import ContainerBase from './ContainerBase'

const propTypes = {
  height: PropTypes.string,
  maxHeight: PropTypes.string,
  maxWidth: PropTypes.string,
  minHeight: PropTypes.string,
  minWidth: PropTypes.string,
  width: PropTypes.string,

  margin: PropTypes.string,
  marginLeft: PropTypes.string,
  marginRight: PropTypes.string,
  marginTop: PropTypes.string,
  marginBottom: PropTypes.string,
  marginSides: PropTypes.string,

  padding: PropTypes.string,
  paddingLeft: PropTypes.string,
  paddingRight: PropTypes.string,
  paddingTop: PropTypes.string,
  paddingBottom: PropTypes.string,
  paddingSides: PropTypes.string,
  withPadding: PropTypes.bool,

  border: PropTypes.string,
  borderColor: PropTypes.string,
  dashed: PropTypes.bool,
  rounded: PropTypes.bool,

  default: PropTypes.bool,
  primary: PropTypes.bool,
  success: PropTypes.bool,
  warning: PropTypes.bool,
  error: PropTypes.bool,
  muted: PropTypes.bool,

  white: PropTypes.bool,
  black: PropTypes.bool,
  red: PropTypes.bool,
  blue: PropTypes.bool,
  purple: PropTypes.bool,
  yellow: PropTypes.bool,
  green: PropTypes.bool,

  lighter: PropTypes.bool,
  light: PropTypes.bool,
  lightest: PropTypes.bool,

  textLeft: PropTypes.bool,
  textCenter: PropTypes.bool,
  textRight: PropTypes.bool,

  shadow: PropTypes.bool,
  heavyShadow: PropTypes.bool,
  animate: PropTypes.bool,

  flex: PropTypes.bool,
  flexInline: PropTypes.bool,
  flexRow: PropTypes.bool,
  flexColumn: PropTypes.bool,
  flexWrap: PropTypes.bool,
  justifyStart: PropTypes.bool,
  justifyEnd: PropTypes.bool,
  justifyCenter: PropTypes.bool,
  justifySpaceBetween: PropTypes.bool,
  justifySpaceAround: PropTypes.bool,
  alignStart: PropTypes.bool,
  alignEnd: PropTypes.bool,
  alignCenter: PropTypes.bool,
  alignSpaceBetween: PropTypes.bool,
  alignSpaceAround: PropTypes.bool,

  direction: PropTypes.string,
  alignItems: PropTypes.string,
  alignContent: PropTypes.string,
  justifyContent: PropTypes.string,
  alignSelf: PropTypes.string,
  flexBasis: PropTypes.string,
  flexGrow: PropTypes.number,
  flexShrink: PropTypes.number,

  withOutline: PropTypes.bool,
}

const defaultProps = {
  height: null,
  maxHeight: null,
  maxWidth: null,
  minHeight: null,
  minWidth: null,
  width: null,

  margin: null,
  marginLeft: null,
  marginRight: null,
  marginTop: null,
  marginBottom: null,
  marginSides: null,

  padding: '20px',
  paddingLeft: '',
  paddingRight: '',
  paddingTop: '',
  paddingBottom: '',
  paddingSides: '',
  withPadding: false,

  border: 'none',
  borderColor: '',
  dashed: false,
  rounded: false,

  default: false,
  primary: false,
  success: false,
  warning: false,
  error: false,
  muted: false,

  white: false,
  black: false,
  red: false,
  blue: false,
  purple: false,
  yellow: false,
  green: false,

  lighter: false,
  light: false,
  lightest: false,

  textLeft: false,
  textCenter: false,
  textRight: false,

  shadow: false,
  heavyShadow: false,
  animate: false,

  flex: false,
  flexInline: false,
  flexRow: false,
  flexColumn: false,
  flexWrap: false,
  justifyStart: false,
  justifyEnd: false,
  justifyCenter: false,
  justifySpaceBetween: false,
  justifySpaceAround: false,
  alignStart: false,
  alignEnd: false,
  alignCenter: false,
  alignSpaceBetween: false,
  alignSpaceAround: false,

  direction: '',
  alignItems: '',
  alignContent: '',
  justifyContent: '',
  alignSelf: '',
  flexBasis: '',
  flexGrow: null,
  flexShrink: null,

  withOutline: false,
}

const Container = props => <ContainerBase {...props} />

Container.displayName = 'hui:Container'

Container.huiName = 'Container'

Container.propTypes = propTypes

Container.defaultProps = defaultProps

export default Container
