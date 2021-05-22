import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Location } from "@reach/router"

const Logo = ({ avatar }) => (
    <Location className="logo-container">
        {({ location }) => {
        return location.pathname == "/" ? (
            <div className="logo">
            <Link to="/about/">
                <img src={avatar} className="logo-avatar" />
            </Link>
            <span className="logo-prompt code">About the Author</span>
            </div>
        ) : (
            <div className="logo">
            <Link to="/">
                <img src={avatar} className="logo-avatar" />
            </Link>
            <span className="logo-prompt code">Back Home</span>
            </div>
        )
        }}
    </Location>
)


Logo.propTypes = {
    avatar: PropTypes.string,
  }

Logo.defaultProps = {
    avatar: ``,
  }

  export default Logo
