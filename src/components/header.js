import PropTypes from "prop-types"
import React from "react"

import Logo from './logo';

const Header = ({ avatar }) => (
  <header className="header-container">
    <div className="header-box">
      <Logo avatar={avatar} />
      <div className="title">
        Rafael Rahal
      </div>
    </div>
  </header>

)

Header.propTypes = {
  avatar: PropTypes.string,
}

Header.defaultProps = {
  avatar: ``,
}

export default Header
