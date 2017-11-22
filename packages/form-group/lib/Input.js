'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactMaskedinput = require('react-maskedinput');

var _reactMaskedinput2 = _interopRequireDefault(_reactMaskedinput);

var _InputBase = require('./InputBase');

var _InputBase2 = _interopRequireDefault(_InputBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Masked = _InputBase2.default.withComponent(_reactMaskedinput2.default);
var InputTextarea = _InputBase2.default.withComponent('textarea');

var Input = function Input(_ref) {
  var phone = _ref.phone,
      ssn = _ref.ssn,
      date = _ref.date,
      mask = _ref.mask,
      textarea = _ref.textarea,
      props = (0, _objectWithoutProperties3.default)(_ref, ['phone', 'ssn', 'date', 'mask', 'textarea']);

  if (phone || ssn || date || mask) {
    var masked = mask || '';
    if (phone) masked = '(111) 111 - 1111';
    if (ssn) masked = '111 - 11 - 1111';
    if (date) masked = '11/11/1111';
    return _react2.default.createElement(Masked, (0, _extends3.default)({ mask: masked }, props));
  }

  if (textarea) {
    return _react2.default.createElement(InputTextarea, props);
  }

  return _react2.default.createElement(_InputBase2.default, props);
};

Input.displayName = 'hui:Input';
Input.huiName = 'Input';

Input.propTypes = {
  phone: _propTypes2.default.bool,
  ssn: _propTypes2.default.bool,
  date: _propTypes2.default.bool,
  textarea: _propTypes2.default.bool,
  mask: _propTypes2.default.string
};
Input.defaultProps = {
  phone: false,
  ssn: false,
  date: false,
  textarea: false,
  mask: null
};

exports.default = Input;
//# sourceMappingURL=Input.js.map