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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('./Icon.js');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Carousel = function (_React$Component) {
  (0, _inherits3.default)(Carousel, _React$Component);

  function Carousel() {
    (0, _classCallCheck3.default)(this, Carousel);

    return (0, _possibleConstructorReturn3.default)(this, (Carousel.__proto__ || (0, _getPrototypeOf2.default)(Carousel)).apply(this, arguments));
  }

  (0, _createClass3.default)(Carousel, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var activeItem = void 0,
          activeItemSrc = void 0;
      if (this.props.carouselItems) {
        activeItem = this.props.carouselItems[0];
        activeItemSrc = activeItem['src'];
      }
      this.setState({
        carouselItems: this.props.carouselItems,
        activeIndex: 0,
        activeItem: activeItem,
        activeItemSrc: activeItemSrc,
        autoPlay: true
      });
    }
  }, {
    key: 'step',
    value: function step(direction) {
      var carouselItems = this.state.carouselItems;

      var activeIndex = this.state.activeIndex;
      if (direction === "forward") {
        if (activeIndex < carouselItems.length - 1) activeIndex++;else activeIndex = 0;
      } else if (direction === "back") if (activeIndex > 0) activeIndex--;else activeIndex = carouselItems.length - 1;

      this.setActiveIndex(activeIndex);
    }
  }, {
    key: 'setActiveIndex',
    value: function setActiveIndex(index) {
      var carouselItems = this.state.carouselItems;

      var activeItem = carouselItems[index];
      this.setState({
        activeIndex: index,
        activeItem: activeItem
      });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      // Todo: add autoplay
      // let autoPlay = this.state.autoPlay;
      // var autoPlayInterval = setInterval(function(){
      //   if (autoPlay){
      //     this.step('forward');
      //   }
      //   else {
      //     clearInterval(autoPlayInterval);
      //   }
      // }.bind(this), 5000)
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var carouselTiles = this.state.carouselItems.map(function (item, index) {
        return _react2.default.createElement('li', { key: index }, _react2.default.createElement('div', {
          className: 'thumbnail',
          style: {
            width: '75px',
            height: "75px",
            backgroundImage: 'url(' + item.src + ')',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            marginRight: '10px'
          },
          onClick: function () {
            this.setActiveIndex(index);
          }.bind(_this2)
        }));
      });
      var slides = this.state.carouselItems.map(function (item, index) {
        return _react2.default.createElement('div', {
          className: "slide",
          key: index,
          style: {
            visibility: '' + (index === _this2.state.activeIndex ? 'visible' : 'hidden'),
            opacity: '' + (index === _this2.state.activeIndex ? '1' : '0'),
            gridColumn: '1/4',
            gridRow: '1/5',
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'flex-end',
            transition: 'all 300ms ease-in-out'
          } }, _react2.default.createElement('a', {
          href: item["url"],
          style: {
            marginTop: 'auto'
          } }, _react2.default.createElement('img', {
          className: 'carouselActiveImage',
          src: item['src'],
          style: {
            maxWidth: '80vw',
            maxHeight: '60vh',
            position: 'relative',
            zIndex: '-1',
            marginTop: 'auto'
          },
          title: item['title']
        })));
      });
      return _react2.default.createElement('section', { 'aria-labelledby': 'carouselheading', className: 'jsx-462931047' + ' ' + 'carousel'
      }, _react2.default.createElement('div', {
        className: 'jsx-462931047' + ' ' + 'slider'
      }, _react2.default.createElement('div', {
        className: 'jsx-462931047' + ' ' + 'slider-buttons'
      }, _react2.default.createElement('button', {
        title: 'carousel back button',
        onClick: function () {
          this.step('back');
        }.bind(this),
        className: 'jsx-462931047' + ' ' + 'back'
      }, _react2.default.createElement(_Icon2.default, { icon: 'play-left' })), _react2.default.createElement('button', {
        title: 'carousel forward button',
        onClick: function () {
          this.step('forward');
        }.bind(this),
        className: 'jsx-462931047' + ' ' + 'forward'
      }, _react2.default.createElement(_Icon2.default, { icon: 'play-right' }))), slides, _react2.default.createElement('div', {
        className: 'jsx-462931047' + ' ' + 'carouselDescription'
      }, _react2.default.createElement('p', {
        className: 'jsx-462931047'
      }, this.state.activeItem['description']), _react2.default.createElement('div', {
        className: 'jsx-462931047' + ' ' + 'descriptionBackground'
      }))), _react2.default.createElement('ul', {
        className: 'jsx-462931047' + ' ' + 'thumbnail-list'
      }, carouselTiles), _react2.default.createElement(_style2.default, {
        styleId: '462931047',
        css: ['.is-hidden.jsx-462931047{visibility:hidden;}', '.is-active.jsx-462931047{visibility:visible;}', '.slider.jsx-462931047{maxHeight:60vh;width:80vw;margin:2em auto;display:grid;grid-template-columns:repeat(3,1fr);grid-gap:0;grid-template-rows:repeat(4,1fr);overflow:hidden;}', '.slide.jsx-462931047 a.jsx-462931047{overflow:hidden;}', '.slider-buttons.jsx-462931047{position:relative;z-index:1;grid-column:3/4;grid-row:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;height:1.8em;}', '.slider-buttons.back.jsx-462931047{float:left;}', '.slider-buttons.forward.jsx-462931047{float:right;}', 'img.thumbnail.jsx-462931047{width:20px;margin-right:10px;}', 'ul.thumbnail-list.jsx-462931047{list-style:none;width:80vw;maxWidth:700px;margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;padding-left:0;}', '.thumbnail-list.jsx-462931047>li.jsx-462931047{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:30px;margin-right:10px;}', '.carouselDescription.jsx-462931047{width:80vw;position:relative;top:-4px;overflow:hidden;float:center;clear:none;grid-column:1/3;grid-row:4;display:grid;grid-template-columns:1fr;grid-template-rows:1fr;}', '.descriptionBackground.jsx-462931047{width:80vw;background-color:black;opacity:0.5;z-index:1;grid-column:1/1;grid-row:2/2;}', '.carouselDescription.jsx-462931047 p.jsx-462931047{color:white;opacity:1;position:relative;z-index:2;text-align:left;text-shadow:0 0 5px #000;grid-column:1/1;grid-row:2/2;}']
      }));
    }
  }]);

  return Carousel;
}(_react2.default.Component);

exports.default = Carousel;