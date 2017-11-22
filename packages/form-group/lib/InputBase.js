'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  :focus:enabled {\n    border-color: ', ';\n  };\n  :disabled {\n    box-shadow: none;\n    color: #aebdc4;\n    cursor: not-allowed;\n  };\n  :invalid {\n    border-color: ', ';\n  };\n  background-repeat: no-repeat;\n  background-position: ', ';\n  background-color: ', ';\n  background-image: ', ';\n\n  border-width: 1px;\n  border-style: solid;\n  border-color: ', ';\n  border-radius: 4px;\n  box-shadow: inset 0 1px 1px 0 #DBE2E8;\n  color: ', ';\n  font-size: ', ';\n  font-weight: 500;\n  height: ', ';\n  line-height: 22px;\n  margin-bottom: 5px;\n  outline: none;\n  padding: 6px 12px;\n  padding-left: ', ';\n  transition: border 0.2s ease-in-out;\n  width: 100%;\n'], ['\n  :focus:enabled {\n    border-color: ', ';\n  };\n  :disabled {\n    box-shadow: none;\n    color: #aebdc4;\n    cursor: not-allowed;\n  };\n  :invalid {\n    border-color: ', ';\n  };\n  background-repeat: no-repeat;\n  background-position: ', ';\n  background-color: ', ';\n  background-image: ', ';\n\n  border-width: 1px;\n  border-style: solid;\n  border-color: ', ';\n  border-radius: 4px;\n  box-shadow: inset 0 1px 1px 0 #DBE2E8;\n  color: ', ';\n  font-size: ', ';\n  font-weight: 500;\n  height: ', ';\n  line-height: 22px;\n  margin-bottom: 5px;\n  outline: none;\n  padding: 6px 12px;\n  padding-left: ', ';\n  transition: border 0.2s ease-in-out;\n  width: 100%;\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _themeProps = require('@hixme-ui/theme-props');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InputBase = _styledComponents2.default.input(_templateObject, function (props) {
  return (0, _themeProps.getBorderColor)((0, _extends3.default)({}, props, { primary: true }));
}, function (props) {
  return (0, _themeProps.getBorderColor)((0, _extends3.default)({}, props, { error: true }));
}, function (props) {
  return props.search ? '13px' : '0px';
}, function (props) {
  return (0, _themeProps.getBackgroundColor)(props);
}, function (props) {
  if (props.search) {
    // magnifying glass
    return 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAC/klEQVQ4T' + '6WUT2hUVxjFz7kvvphkkknVqthKEnEUC9aJjWQcpTRgRko3kkUXRcFALbqzRaRQ6EJxk5bSglDahQiFrkoVDUInxqGUTP6QZqJpuklikLQVb' + 'RtKop048+ae8hINM5OZLOy3u/ee++N8f+4lSkTP8FRQdq6JlgGAHqnZ6tz6mWh0a7qUPn+P+Yvx8XH3938W3gbNCQHbIL1oqIyo+xJ/dR33Q' + 'lvr7uHVoMvARCpVn0mjm7C7JdSVukTgLh3z5aHW8GckbRkNsOQs85Vgjy+KiHkIo4SZgkEQso0Aw5JoaOYB+3F79LXPywLjfT8fJXnRSkEaz' + 'CBnzjVtCnwTCoWe+Jd+unPnhfSj7FUBYSy5/4WO6YhFmieKoVxsQGbummRf950R/DQW3XuuWJiYnl6bvT/7tYRji0kY09UeCX9IUgVNiQ+lw' + 'vJwHbIv+2a2baxrf+asGHprcGSPl0Nc0kZjTKJxQ+DNYi3j/akDsuoFVEmYy7EDzZ3luphMjq97hCe9ksKgGXLd6rfaWnb+VeDwh/7brVTup' + 'qQAjbkS29/cUQ7Y2zfSkCNuSHqFZHKdu7m9pWXLvwXAm4OjO6z1rstyBwxHHFMVO9S66+9S0ET/2BvZXLZbVA2Iq7H9eztW1DCZnKmax8NvI' + 'RzxDylzsWJL8GxbU9NCPvTHobGtC172FqTtIDMw5tThSPjSii77G4nBsZZsLvOdhAYScwAGKhyetaj6jV46wDUVjbmsd17EQX8WaThQx9rDk' + 'UjI1xbE8kvpGUh1WWtPQqhdGm4+JPAHABcWDYtpPg2Sjw35hbO5/nxxJstASU7P4O13ZO0ZSK+urCEzJCYBvCT/AZSBFnwOPiQ+kApBeJfAP' + 'ivUUPJA80AG3W6lvs+m9YHA05CtLQVdAfShfp0mJyfde7NeoN4JpvNHY2JionL6z/mPykFLAlf7nvyz1aDPBcyHwuJ9UQEYzjk0R54b6EOHh' + '7VmNjP6iWA7KdSIznv/C/i03k68byxm6EWr1ld3/Qe0WWxwZWPXigAAAABJRU5ErkJggg==)';
  }

  return 'none';
}, function (props) {
  return (0, _themeProps.getBorderColor)((0, _extends3.default)({}, props, { error: props.invalid }));
}, function (props) {
  return (0, _themeProps.getTextColor)(props);
}, function (props) {
  if (props.large) return '21px';
  return '16px';
}, function (props) {
  if (props.large) return '65px';
  return '42px';
}, function (props) {
  if (props.search) return '48px';
  return '12px';
});

InputBase.displayName = 'hui:InputBase';
InputBase.huiName = 'InputBase';

exports.default = InputBase;
//# sourceMappingURL=InputBase.js.map