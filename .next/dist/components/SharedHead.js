'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  return _react2.default.createElement(_head2.default, null, _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width' }), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Roboto:400,300,300italic,700,400italic,700italic&subset=latin,latin-ext', rel: 'stylesheet' }), props.children, _react2.default.createElement('link', { rel: 'shortcut icon', type: 'image/x-icon', href: '/static/favicon.png' }));
};