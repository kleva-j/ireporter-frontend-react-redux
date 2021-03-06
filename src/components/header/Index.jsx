import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/bg-2.svg';

const Navbar = ({ children }) => (
  <div className="navbar fixed shade-default bg-light index">
    <div className="container">
      <Link to="/" className="logo">
        <img src={logo} height="65px" alt="logo" />
        eporter
      </Link>
      <input type="checkbox" id="burger-toggle" />
      <label htmlFor="burger-toggle" id="burger">
        <div />
      </label>
      {children}
    </div>
  </div>
);

Navbar.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Navbar;
