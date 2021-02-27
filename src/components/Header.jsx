import React from 'react';
import { Link } from '@reach/router';

import '../styles/componentes/header.scss';
import logo from '../assets/static/logo.png';
import userIcon from '../assets/static/userIcon.png';

const Header = () => {
  return (
    <header className="headers">
      <div className="header-container">
        <Link className="link" to="/course">
          course
        </Link>
        <Link className="header_logo" to="/">
          <figure className="header_logo">
            <img src={logo} alt="logo" />
          </figure>
        </Link>

        <Link className="header_userIcon" to="/usser">
          <figure className="header_userIcon">
            <img src={userIcon} alt="usericon" />
          </figure>
        </Link>
      </div>
    </header>
  );
};

export default Header;
