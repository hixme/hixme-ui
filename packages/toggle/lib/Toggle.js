'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _text = require('@hixme-ui/text');

var _text2 = _interopRequireDefault(_text);

var _StyledToggle = require('./StyledToggle');

var _StyledToggle2 = _interopRequireDefault(_StyledToggle);

var _Slider = require('./Slider');

var _Slider2 = _interopRequireDefault(_Slider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ToggleButton = function ToggleButton(_ref) {
  var truthyText = _ref.truthyText,
      falsyText = _ref.falsyText,
      noLabels = _ref.noLabels,
      rest = (0, _objectWithoutProperties3.default)(_ref, ['truthyText', 'falsyText', 'noLabels']);

  // restrict redux form props
  var getProps = function getProps() {
    var allowedKeys = ['checked', 'disabled', 'name', 'onKeyUp', 'onKeyDown', 'onKeyPress', 'onChange', 'onDragStart', 'onDrop', 'placeholder', 'tabIndex', 'type', 'value'];

    /* eslint-disable no-param-reassign */
    return (0, _keys2.default)(rest).reduce(function (prev, current) {
      if (allowedKeys.indexOf(current) !== -1) {
        prev[current] = rest[current];
      }
      return prev;
    }, {});
  };

  var withLabels = !noLabels;
  var ToggleLabel = function ToggleLabel() {
    if (withLabels) {
      return rest.checked ? _react2.default.createElement(
        _text2.default,
        { large: true, style: { margin: '0 0 0 14px' } },
        truthyText
      ) : _react2.default.createElement(
        _text2.default,
        { large: true, style: { margin: '0 0 0 14px' } },
        falsyText
      );
    }
    return _react2.default.createElement('span', null);
  };

  return _react2.default.createElement(
    _StyledToggle2.default,
    null,
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement('input', (0, _extends3.default)({ type: 'checkbox' }, getProps())),
      _react2.default.createElement(_Slider2.default, (0, _extends3.default)({ id: 'slider' }, getProps())),
      _react2.default.createElement(ToggleLabel, null)
    )
  );
};

ToggleButton.displayName = 'hui:ToggleButton';
ToggleButton.huiName = 'ToggleButton';

ToggleButton.propTypes = {
  truthyText: _propTypes2.default.string,
  falsyText: _propTypes2.default.string,
  noLabels: _propTypes2.default.bool
  // withIcons: PropTypes.bool,
};

ToggleButton.defaultProps = {
  truthyText: 'Yes',
  falsyText: 'No',
  noLabels: false
  // withIcons: false,
};

exports.default = ToggleButton;
//# sourceMappingURL=Toggle.js.map