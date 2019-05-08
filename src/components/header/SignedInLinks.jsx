/* eslint-disable react/jsx-no-bind */
import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/scss/dashboard.scss';
import '../../assets/scss/mediaqueries.scss';

const SignedInLinks = () => (
  <nav className="nav">
    <Link className="nav-bar-link active" to="/">Home</Link>
    <Link className="nav-bar-link" to="/logout">Logout</Link>
  </nav>
);

export default SignedInLinks;
