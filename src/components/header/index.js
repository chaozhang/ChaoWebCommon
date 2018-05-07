import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

 
const Header = (props) => {
    return (
        <header>
            <div className="container">
                <Link id="logo" to="/">{props.logo}</Link>
                <div className="links">
                    <a href={props.repo} target="_blank">Github</a>
                    <a href={props.issues} target="_blank">Submit Feedback</a>
                </div>
            </div>
        </header>
    );
}


Header.propTypes = {
    repo: PropTypes.string.isRequired,
    issues: PropTypes.string.isRequired,
    logo: PropTypes.element.isRequired
}

 
export default Header