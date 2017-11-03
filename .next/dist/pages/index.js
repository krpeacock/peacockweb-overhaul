'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _Layout = require('../components/Layout.js');

var _Layout2 = _interopRequireDefault(_Layout);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var headProperties = _react2.default.createElement('title', null, 'Home Page');

var Index = function Index() {
  return _react2.default.createElement(_Layout2.default, {
    headProperties: headProperties
  }, _react2.default.createElement('div', { role: 'banner', className: 'jsx-1781826733' + ' ' + 'banner'
  }, _react2.default.createElement('h1', {
    className: 'jsx-1781826733'
  }, 'Welcome to Peacockweb'), _react2.default.createElement('p', {
    className: 'jsx-1781826733'
  }, 'We are a family of four developers, located in the San Francisco Bay Area. Select a card below to see our profiles')), _react2.default.createElement('section', { id: 'profiles', className: 'jsx-1781826733'
  }, _react2.default.createElement('div', {
    className: 'jsx-1781826733' + ' ' + 'card'
  }, _react2.default.createElement(_link2.default, { href: '/kyle' }, _react2.default.createElement('a', {
    className: 'jsx-1781826733'
  }, 'Kyle\'s portfolio'))), _react2.default.createElement('div', {
    className: 'jsx-1781826733' + ' ' + 'card'
  }, _react2.default.createElement(_link2.default, { href: '/andrew' }, _react2.default.createElement('a', {
    className: 'jsx-1781826733'
  }, 'Andrew\'s portfolio'))), _react2.default.createElement('div', {
    className: 'jsx-1781826733' + ' ' + 'card'
  }, _react2.default.createElement(_link2.default, { href: '/will' }, _react2.default.createElement('a', {
    className: 'jsx-1781826733'
  }, 'Will\'s portfolio'))), _react2.default.createElement('div', {
    className: 'jsx-1781826733' + ' ' + 'card'
  }, _react2.default.createElement(_link2.default, { href: '/gavin' }, _react2.default.createElement('a', {
    className: 'jsx-1781826733'
  }, 'Gavin\'s portfolio')))), _react2.default.createElement(_style2.default, {
    styleId: '1781826733',
    css: ['.banner.jsx-1781826733>h1.jsx-1781826733,.banner.jsx-1781826733>p.jsx-1781826733{text-align:center;padding:0 10vw;}', '.banner.jsx-1781826733>a.jsx-1781826733{margin-left:0;}', '.banner.jsx-1781826733{background:#f9fafb;border-bottom:1px solid #e6e9eb;width:100vw;position:relative;left:0;padding:3em 0;}', 'h1.jsx-1781826733{font-size:2em;margin:0 auto 0;color:#415161;}', 'h2.jsx-1781826733{text-align:center;}', 'h4.jsx-1781826733{font-size:1.2em;margin:0 auto 1em;color:#8496b3;text-align:center;font-weight:500;}', 'p.jsx-1781826733{color:#8496b3;font-size:1.15em;line-height:1.5;margin:0.5em;font-weight:200;}', '#profiles.jsx-1781826733{margin:2em;}']
  }));
};

exports.default = Index;