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

var _Carousel = require('../components/Carousel.js');

var _Carousel2 = _interopRequireDefault(_Carousel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var headProperties = _react2.default.createElement('title', null, 'Kyle Peacock');

var carouselItems = [{
  src: "http://peacockweb.net/uploads/8/0/0/1/80018494/screen-shot-2017-07-12-at-2-49-16-pm_orig.png",
  title: "Audiusa.com",
  description: "Front-end development for Audi USA, using AEM and CoffeeScript and all that jazz",
  url: "https://www.audiusa.com/"
}, {
  src: "http://peacockweb.net/uploads/8/0/0/1/80018494/screen-shot-2017-07-12-at-2-40-19-pm_orig.png",
  title: 'Wells Fargo - Getting College Ready',
  description: "Single Page App for Wells Fargo using React with Typescript",
  url: "https://welcome.wf.com/get-college-ready-tracker/#Home"
}, {
  src: "http://www.peacockweb.net/uploads/8/0/0/1/80018494/screen-shot-2016-09-29-at-10-12-27-am_orig.png",
  title: "SF Bach Choir",
  description: "Webmaster for the SF Bach Choir",
  url: "https://www.sfbach.org/"
}, {
  src: "http://www.peacockweb.net/uploads/8/0/0/1/80018494/screen-shot-2016-07-12-at-3-31-21-pm_orig.png",
  title: "Power Strip",
  description: "Using a Raspberry Pi Zero, I built a smart power strip that uses a Node.js service with a React.js front-end to control each of the outlets.",
  url: "http://strip.peacockweb.net/"
}];

var Kyle = function Kyle() {
  return _react2.default.createElement(_Layout2.default, {
    headProperties: headProperties,
    rootUrl: '/kyle'
  }, _react2.default.createElement('div', {
    className: 'jsx-810272162' + ' ' + 'banner'
  }, _react2.default.createElement('h1', {
    className: 'jsx-810272162'
  }, 'Kyle Peacock'), _react2.default.createElement('h4', {
    className: 'jsx-810272162'
  }, 'Creative Developer'), _react2.default.createElement('p', {
    className: 'jsx-810272162'
  }, 'I am a former law student turned full-stack ECMAScript developer, based in San\xA0Francisco,\xA0California. This website is designed to showcase my professional work and host my\xA0personal\xA0projects.'), _react2.default.createElement('p', {
    className: 'jsx-810272162'
  }, 'Visit the\xA0', _react2.default.createElement(_link2.default, { href: '/blog' }, _react2.default.createElement('a', {
    className: 'jsx-810272162'
  }, 'Blog')), '\xA0to read some of what my family has written.')), _react2.default.createElement('section', { id: 'specialties', className: 'jsx-810272162'
  }, _react2.default.createElement('div', {
    className: 'jsx-810272162' + ' ' + 'item-a'
  }, _react2.default.createElement('h3', {
    className: 'jsx-810272162'
  }, 'JavaScript'), _react2.default.createElement('p', {
    className: 'jsx-810272162'
  }, 'Recently, JavaScript development has become the standard for modern web applications. The environment is constantly evolving, thanks to passionate open-source developers, and I am always reading and experimenting to introduce new tools and efficiencies into my work.')), _react2.default.createElement('div', {
    className: 'jsx-810272162' + ' ' + 'item-b'
  }, _react2.default.createElement('h3', {
    className: 'jsx-810272162'
  }, 'Prototyping'), _react2.default.createElement('p', {
    className: 'jsx-810272162'
  }, 'While I am comfortable developing for established projects, rapid prototyping is where I shine. During my training in web development, I would build applications from scratch daily, iterating and improving my technique. My favorite projects have all started from scratch to address a specific problem.')), _react2.default.createElement('div', {
    className: 'jsx-810272162' + ' ' + 'item-c'
  }, _react2.default.createElement('h3', {
    className: 'jsx-810272162'
  }, 'Hardware / IOT'), _react2.default.createElement('p', {
    className: 'jsx-810272162'
  }, 'While there are fewer opportunities to do build projects with integrated hardware professionally, it\'s something I love doing. I\'ve been a maker since I was a kid, and I fell in love with Raspberry Pi and Node.js as a way to quickly add connected functionality to a project.')), _react2.default.createElement('div', {
    className: 'jsx-810272162' + ' ' + 'item-d'
  }, _react2.default.createElement('h3', {
    className: 'jsx-810272162'
  }, 'User Experience'), _react2.default.createElement('p', {
    className: 'jsx-810272162'
  }, 'You most likely came here because you are a recruiter, someone I\'ve met, or someone who enjoyed something I wrote. Most people who visit a portfolio site wouldn\'t read this paragraph, because this design directs attention to my action items: contact info, my blog, and my project gallery down below.'))), _react2.default.createElement('hr', {
    className: 'jsx-810272162'
  }), _react2.default.createElement('section', {
    className: 'jsx-810272162'
  }, _react2.default.createElement('h2', {
    className: 'jsx-810272162'
  }, 'My Projects'), _react2.default.createElement(_Carousel2.default, {
    carouselItems: carouselItems
  })), _react2.default.createElement(_style2.default, {
    styleId: '810272162',
    css: ['.banner>h1,.banner>p{text-align:center;padding:0 10vw;}', '.banner>a{margin-left:0;}', 'section{margin:3em 0;}', 'h1{font-size:2em;margin:0 auto 0;color:#415161;}', 'h2{text-align:center;}', 'h3{color:#8496b3;text-align:left;margin:0.5em;}', 'h4{font-size:1.2em;margin:0 auto 1em;color:#8496b3;text-align:center;font-weight:500;}', 'p{color:#8496b3;font-size:1.15em;line-height:1.5;margin:0.5em;font-weight:200;}', 'a{color:#415161;}', '.banner{background:#f9fafb;border-bottom:1px solid #e6e9eb;width:100vw;position:relative;left:0;padding:3em 0;}', '#specialties{display:grid;grid-template-columns:repeat(2,1fr);grid-gap:2em;grid-template-rows:1fr 1fr;text-align:left;width:80vw;margin:3em auto;}', '.item-a{grid-column:1 / 2;grid-row:1/1;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}', '.item-b{grid-column:2 / 2;grid-row:1/1;}', '.item-c{grid-column:1 / 2;grid-row:2/2;}', '.item-d{grid-column:2 / 2;grid-row:2/2;}', '@media (max-width:800px){#specialties{grid-template-columns:1fr;grid-auto-flow:row;grid-template-rows:repeat(4,1fr);}.item-a{grid-column:1;grid-row:1;}.item-b{grid-column:1;grid-row:2;}.item-c{grid-column:1;grid-row:3;}.item-d{grid-column:1;grid-row:4;}}']
  }));
};

exports.default = Kyle;