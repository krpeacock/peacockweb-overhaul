'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _Navigation = require('./Navigation.js');

var _Navigation2 = _interopRequireDefault(_Navigation);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  return _react2.default.createElement('header', {
    className: 'jsx-1249271642'
  }, _react2.default.createElement(_link2.default, { href: '/' }, _react2.default.createElement('a', {
    className: 'jsx-1249271642'
  }, _react2.default.createElement('img', { src: 'http://www.peacockweb.net/uploads/8/0/0/1/80018494/1144651.png', alt: 'Peacock Web Logo', id: 'logo', className: 'jsx-1249271642'
  }))), _react2.default.createElement(_Navigation2.default, { rootUrl: props.rootUrl }), _react2.default.createElement(_style2.default, {
    styleId: '1249271642',
    css: ['header.jsx-1249271642{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-bottom:1px solid #e6e9eb;}', '#logo.jsx-1249271642{margin-bottom:1em;}']
  }));
};