'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _profile = require('../../data/profile');

var _profile2 = _interopRequireDefault(_profile);

var _gitRepo = require('../../data/gitRepo');

var _gitRepo2 = _interopRequireDefault(_gitRepo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// header data
var footerData = {
    year: new Date().getFullYear().toString(),
    name: _profile2.default.name,
    title: _profile2.default.title,
    repo: {
        name: 'ChaoWebCommon',
        user: _gitRepo2.default.user,
        url: _gitRepo2.default.url
    },
    gitBtns: _gitRepo2.default.gitBtns
};

exports.default = footerData;