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

var _reactDropzone = require('react-dropzone');

var _reactDropzone2 = _interopRequireDefault(_reactDropzone);

var _container = require('@hixme-ui/container');

var _container2 = _interopRequireDefault(_container);

var _icon = require('@hixme-ui/icon');

var _icon2 = _interopRequireDefault(_icon);

var _text = require('@hixme-ui/text');

var _text2 = _interopRequireDefault(_text);

var _title = require('@hixme-ui/title');

var _title2 = _interopRequireDefault(_title);

var _theme = require('@hixme-ui/theme');

var _theme2 = _interopRequireDefault(_theme);

var _StyledIcon = require('./StyledIcon');

var _StyledIcon2 = _interopRequireDefault(_StyledIcon);

var _StyledUploadContent = require('./StyledUploadContent');

var _StyledUploadContent2 = _interopRequireDefault(_StyledUploadContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var textColors = _theme2.default.textColors;


var dropzoneDefaultStyles = {
  width: '100%',
  backgroundColor: 'white',
  border: '2px dashed ' + textColors.primary,
  borderRadius: '6px',
  padding: '20px 10px',
  textAlign: 'center',
  cursor: 'pointer'
};

var dropzoneActiveStyles = {
  border: '2px solid ' + textColors.primary
};

var UploadBox = function UploadBox(_ref) {
  var compact = _ref.compact,
      onDrop = _ref.onDrop,
      value = _ref.value,
      restProps = (0, _objectWithoutProperties3.default)(_ref, ['compact', 'onDrop', 'value']);
  return _react2.default.createElement(
    _reactDropzone2.default,
    (0, _extends3.default)({
      onDrop: onDrop,
      style: dropzoneDefaultStyles,
      activeStyle: (0, _extends3.default)({}, dropzoneDefaultStyles, dropzoneActiveStyles)
    }, restProps),
    function (_ref2) {
      var isDragActive = _ref2.isDragActive;
      return _react2.default.createElement(
        _container2.default,
        { noPadding: true, flex: compact, justifyCenter: compact, alignCenter: compact },
        _react2.default.createElement(
          _StyledIcon2.default,
          { compact: compact },
          _react2.default.createElement(_icon2.default, { cloudUpload: true, lighter: true, size: 3.4 })
        ),
        _react2.default.createElement(
          _StyledUploadContent2.default,
          { compact: compact },
          _react2.default.createElement(
            _title2.default,
            { smaller: true, primary: isDragActive, style: { margin: compact ? '0' : '0 0 0.9em' } },
            'Drag & Drop'
          ),
          value ? _react2.default.createElement(
            _text2.default,
            { primary: true, fontSize: '16px', style: { textDecoration: 'underline' } },
            value
          ) : _react2.default.createElement(
            _text2.default,
            { lighter: true, fontSize: '16px' },
            'file here or ',
            _react2.default.createElement(
              _text2.default,
              { dashed: true, primary: true },
              'browse'
            )
          )
        )
      );
    }
  );
};

UploadBox.displayName = 'hui:UploadBox';
UploadBox.huiName = 'UploadBox';

UploadBox.propTypes = {
  compact: _propTypes2.default.bool,
  onDrop: _propTypes2.default.func,
  value: _propTypes2.default.string
};

UploadBox.defaultProps = {
  compact: false,
  onDrop: function onDrop() {
    return null;
  },
  value: ''
};

exports.default = UploadBox;
//# sourceMappingURL=UploadBox.js.map