/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Link } from 'react-router-dom';

const SignedInLinks = () => (
  <nav className="nav">
    <Link className="nav-bar-link active" href="/">Home</Link>
    <Link className="nav-bar-link" href="/login">Logout</Link>
  </nav>
);

export default SignedInLinks;
