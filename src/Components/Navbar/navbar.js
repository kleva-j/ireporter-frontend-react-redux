/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../images/bg-2.svg';

const Navbar = ({ children }) => (
  <div className="navbar fixed shade-default bg-light">
    <div className="container">
      <a href="/public" className="logo">
        <img src={logo} height="65px" alt="logo" />
        eporter
      </a>
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
