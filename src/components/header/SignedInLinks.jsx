/* eslint-disable react/jsx-no-bind */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../../assets/scss/dashboard.scss';
import '../../assets/scss/mediaqueries.scss';

const SignedInLinks = (props) => {
  const { dashboard } = props;

  return (
    <nav className="nav">
      <Link className="nav-bar-link active" to="/">Home</Link>
      { dashboard && <Link className="nav-bar-link" to="/profile">Dashboard</Link> }
      <Link className="nav-bar-link" to="/logout">Logout</Link>
    </nav>
  );
};

SignedInLinks.propTypes = {
  dashboard: PropTypes.bool,
};

SignedInLinks.defaultProps = {
  dashboard: false,
};

export default SignedInLinks;
