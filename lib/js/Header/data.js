'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _gitRepo = require('../../data/gitRepo');

var _gitRepo2 = _interopRequireDefault(_gitRepo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// header data
var repoName = 'ChaoWebCommon';

var headerData = {
    repo: _gitRepo2.default.url + '/' + repoName,
    issues: _gitRepo2.default.url + '/' + repoName + '/issues/new',
    logo: _react2.default.createElement('div', { className: 'img' })
};

exports.default = headerData;