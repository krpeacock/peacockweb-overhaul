'use strict';

var _Layout = require('../components/Layout.js');

var _Layout2 = _interopRequireDefault(_Layout);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var headProperties = _react2.default.createElement('title', null, 'Gavin Profile');

var Gavin = function Gavin() {
  return _react2.default.createElement(_Layout2.default, {
    headProperties: headProperties,
    rootUrl: '/gavin'
  });
};