'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  div {\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n  }\n\n  input[type="checkbox"] {\n    display: none;\n    visibility: hidden;\n  }\n\n  input[type="checkbox"]:checked ~ #slider {\n    background: #2eae8f;\n    background-position: 75% 50%;\n    background-repeat: no-repeat;\n  }\n\n  input[type="checkbox"]:disabled ~ #slider {\n    background: #bdcdd8; // greyed out on disabled\n    background-position: 75% 50%;\n    background-repeat: no-repeat;\n  }\n\n  input[type="checkbox"]:checked ~ #slider:before {\n    left: 1px;\n    box-shadow: 2px 0px 3px 1px rgba(0, 0, 0, 0.2);\n  }\n'], ['\n  div {\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n  }\n\n  input[type="checkbox"] {\n    display: none;\n    visibility: hidden;\n  }\n\n  input[type="checkbox"]:checked ~ #slider {\n    background: #2eae8f;\n    background-position: 75% 50%;\n    background-repeat: no-repeat;\n  }\n\n  input[type="checkbox"]:disabled ~ #slider {\n    background: #bdcdd8; // greyed out on disabled\n    background-position: 75% 50%;\n    background-repeat: no-repeat;\n  }\n\n  input[type="checkbox"]:checked ~ #slider:before {\n    left: 1px;\n    box-shadow: 2px 0px 3px 1px rgba(0, 0, 0, 0.2);\n  }\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyledToggle = _styledComponents2.default.label(_templateObject);

exports.default = StyledToggle;
//# sourceMappingURL=StyledToggle.js.map