import PropTypes from "prop-types"
import React from "react"

import Logo from './logo';

const Header = ({ avatar }) => (
  <header className="header-container">
    <div className="header-box">
    <div className="title-container">
        <div className="tittle">Rafael Rahal</div>
        <div className="subTittle">Software Engineer</div>
      </div>
    <Logo avatar={avatar} />
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
