'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Layout = require('../../components/Layout.js');

var _Layout2 = _interopRequireDefault(_Layout);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(_Layout2.default, { rootUrl: '/andrew' }, _react2.default.createElement('p', null, 'This is Andrew\'s contact page'));
};