'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = function Footer(props) {
    var _props$repo = props.repo,
        name = _props$repo.name,
        user = _props$repo.user,
        url = _props$repo.url;


    var gitBtns = props.gitBtns.map(function (item, index) {
        var src = 'https://ghbtns.com/github-btn.html?user=' + user + '&repo=' + name + '&type=' + item.name + '&count=true&v=2';

        return _react2.default.createElement('iframe', { key: index, src: src, frameBorder: '0', scrolling: '0', width: item.size, height: '20px' });
    });

    return _react2.default.createElement(
        'footer',
        null,
        _react2.default.createElement(
            'div',
            { className: 'social' },
            gitBtns
        ),
        _react2.default.createElement(
            'p',
            null,
            'Copyright \xA9 ',
            props.year,
            ', All rights reserved.'
        ),
        _react2.default.createElement(
            'p',
            null,
            'Created and maintained by ',
            _react2.default.createElement(
                'a',
                { href: url, target: '_blank' },
                props.name
            ),
            ' (',
            props.title,
            ').'
        )
    );
};

Footer.propTypes = {
    year: _propTypes2.default.string.isRequired,
    name: _propTypes2.default.string.isRequired,
    title: _propTypes2.default.string.isRequired,
    repo: _propTypes2.default.shape({
        name: _propTypes2.default.string.isRequired,
        user: _propTypes2.default.string.isRequired,
        url: _propTypes2.default.string.isRequired
    }),
    gitBtns: _propTypes2.default.arrayOf(_propTypes2.default.shape({
        size: _propTypes2.default.string.isRequired,
        name: _propTypes2.default.string.isRequired
    })).isRequired
};

exports.default = Footer;