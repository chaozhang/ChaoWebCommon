'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _header = require('./header/');

var _header2 = _interopRequireDefault(_header);

var _icons = require('./icons/');

var _icons2 = _interopRequireDefault(_icons);

var _nav = require('./nav/');

var _nav2 = _interopRequireDefault(_nav);

var _footer = require('./footer/');

var _footer2 = _interopRequireDefault(_footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  Header: _header2.default,
  Icon: _icons2.default,
  Nav: _nav2.default,
  Footer: _footer2.default
};