'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var icons = {
  'play-right': "M192 128l640 384-640 384z",
  'play-left': "M832 896l-640-384 640-384z"
};

exports.default = function (props) {
  return _react2.default.createElement('svg', { width: '22', height: '22', viewBox: '0 0 1024 1024' }, _react2.default.createElement('path', { d: icons[props.icon] }));
};