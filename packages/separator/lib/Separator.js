'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  width: 100%;\n  height: ', ';\n  background: ', ';\n  border: 0px solid rgba(0, 0, 0, 0);\n  margin: ', ';\n  padding: ', ';\n  border-radius: 2px;\n'], ['\n  width: 100%;\n  height: ', ';\n  background: ', ';\n  border: 0px solid rgba(0, 0, 0, 0);\n  margin: ', ';\n  padding: ', ';\n  border-radius: 2px;\n']);

// theme


var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _propTypes = require('prop-types');

var _theme = require('@hixme-ui/theme');

var _themeProps = require('@hixme-ui/theme-props');

var _themeProps2 = _interopRequireDefault(_themeProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log('themeProps --- ', _themeProps2.default);

var Separator = _styledComponents2.default.div(_templateObject, function (props) {
  return props.size;
}, function (props) {
  if (props.background) return props.background;
  return (0, _themeProps2.default)(props, _theme.colorTheme.lighter);
}, function (props) {
  return props.margin;
}, function (props) {
  return props.padding;
});

Separator.propTypes = {
  white: _propTypes.PropTypes.bool,
  light: _propTypes.PropTypes.bool,
  grey: _propTypes.PropTypes.bool,
  default: _propTypes.PropTypes.bool,
  black: _propTypes.PropTypes.bool,
  background: _propTypes.PropTypes.string,

  size: _propTypes.PropTypes.string,
  margin: _propTypes.PropTypes.string,
  padding: _propTypes.PropTypes.string
};

Separator.defaultProps = {
  white: false,
  light: false,
  grey: false,
  default: false,
  black: false,
  background: null,

  size: '2px',
  margin: '15px 0',
  padding: '0'
};

Separator.displayName = 'hui:Separator';
Separator.huiName = 'Separator';

exports.default = Separator;
//# sourceMappingURL=Separator.js.map