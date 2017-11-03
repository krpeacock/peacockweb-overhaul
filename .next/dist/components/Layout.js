'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Header = require('./Header.js');

var _Header2 = _interopRequireDefault(_Header);

var _SharedHead = require('./SharedHead.js');

var _SharedHead2 = _interopRequireDefault(_SharedHead);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  return _react2.default.createElement('div', { className: 'app' }, _react2.default.createElement(_SharedHead2.default, null, props.headProperties), _react2.default.createElement(_Header2.default, { rootUrl: props.rootUrl }), _react2.default.createElement('main', null, props.children));
};