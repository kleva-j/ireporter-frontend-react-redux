/* eslint-disable react/jsx-filename-extension */
import React from 'react';

const SignedInLinks = () => (
  <nav className="nav">
    <a className="nav-bar-link active" href="/">Home</a>
    <a className="nav-bar-link" href="/login">Login</a>
    <a className="nav-bar-link" href="/api/v1/users/auth/signup">Signup</a>
  </nav>
);

export default SignedInLinks;
