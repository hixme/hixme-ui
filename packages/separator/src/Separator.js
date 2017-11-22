import styled from 'styled-components'
import { PropTypes } from 'prop-types'

// theme
import { colorTheme } from '@hixme-ui/theme'
import themeProps from '@hixme-ui/theme-props'

const Separator = styled.div`
  width: 100%;
  height: ${props => props.size};
  background: ${(props) => {
    if (props.background) return props.background
    return themeProps(props, colorTheme.lighter)
  }};
  border: 0px solid rgba(0, 0, 0, 0);
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  border-radius: 2px;
`

Separator.propTypes = {
  white: PropTypes.bool,
  light: PropTypes.bool,
  grey: PropTypes.bool,
  default: PropTypes.bool,
  black: PropTypes.bool,
  background: PropTypes.string,

  size: PropTypes.string,
  margin: PropTypes.string,
  padding: PropTypes.string,
}

Separator.defaultProps = {
  white: false,
  light: false,
  grey: false,
  default: false,
  black: false,
  background: null,

  size: '2px',
  margin: '15px 0',
  padding: '0',
}

Separator.displayName = 'hui:Separator'
Separator.huiName = 'Separator'

export default Separator
