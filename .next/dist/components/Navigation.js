'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNoSsr = require('react-no-ssr');

var _reactNoSsr2 = _interopRequireDefault(_reactNoSsr);

require('isomorphic-fetch');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Next.js uses these Link components for cross-page routing

var Navigation = function (_React$Component) {
  (0, _inherits3.default)(Navigation, _React$Component);

  function Navigation() {
    (0, _classCallCheck3.default)(this, Navigation);

    return (0, _possibleConstructorReturn3.default)(this, (Navigation.__proto__ || (0, _getPrototypeOf2.default)(Navigation)).apply(this, arguments));
  }

  (0, _createClass3.default)(Navigation, [{
    key: 'render',
    value: function render(props) {
      var rootUrl = this.props.rootUrl ? this.props.rootUrl : "";
      return _react2.default.createElement('nav', {
        className: 'jsx-3586468609'
      }, _react2.default.createElement(_link2.default, { href: rootUrl + '/' }, _react2.default.createElement('a', {
        className: 'jsx-3586468609'
      }, 'home')), _react2.default.createElement(_link2.default, { href: 'http://peacockweb.net/blog' }, _react2.default.createElement('a', {
        className: 'jsx-3586468609'
      }, 'blog')), _react2.default.createElement(_link2.default, { href: rootUrl + '/contact' }, _react2.default.createElement('a', {
        className: 'jsx-3586468609'
      }, 'contact')), _react2.default.createElement(_style2.default, {
        styleId: '3586468609',
        css: ['*{font-family:"Roboto" !important;}', '.app{width:100vw;position:absolute;overflow-x:hidden;left:0;top:0;margin-top:1em;}', 'nav>a,nav>a:visited{margin:1em;text-decoration:none;color:#b5c0d1;font-size:1.15em;}', 'a:hover,a.active{color:#415161;}', 'nav{margin-bottom:1em;}']
      }));
    }
  }]);

  return Navigation;
}(_react2.default.Component);

exports.default = Navigation;