'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header(props) {
    return _react2.default.createElement(
        'header',
        null,
        _react2.default.createElement(
            'div',
            { className: 'container' },
            _react2.default.createElement(
                _reactRouterDom.Link,
                { id: 'logo', to: '/' },
                props.logo
            ),
            _react2.default.createElement(
                'div',
                { className: 'links' },
                _react2.default.createElement(
                    'a',
                    { href: props.repo, target: '_blank' },
                    'Github'
                ),
                _react2.default.createElement(
                    'a',
                    { href: props.issues, target: '_blank' },
                    'Submit Feedback'
                )
            )
        )
    );
};

Header.propTypes = {
    repo: _propTypes2.default.string.isRequired,
    issues: _propTypes2.default.string.isRequired,
    logo: _propTypes2.default.element.isRequired
};

exports.default = Header;