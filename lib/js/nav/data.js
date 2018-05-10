'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// header data

var BASE_URL = '/';

var navItems = [{
  name: 'Home',
  url: BASE_URL
}, {
  name: 'Colors',
  url: BASE_URL + 'colors'
}, {
  name: 'Icons',
  url: BASE_URL + 'icons'
}, {
  name: 'Components',
  url: BASE_URL + 'gallery'
}];

exports.default = { navItems: navItems };