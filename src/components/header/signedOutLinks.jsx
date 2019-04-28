/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Link } from 'react-router-dom';

const SignedInLinks = () => (
  <nav className="nav">
    <Link className="nav-bar-link active" to="/">Home</Link>
    <Link className="nav-bar-link" to="/login">Login</Link>
    <Link className="nav-bar-link" to="/signup">Signup</Link>
  </nav>
);

export default SignedInLinks;
