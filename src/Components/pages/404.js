/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <article>
    <h1>Page not found.</h1>
    <Link to="/" className="btn">Home</Link>
  </article>
);

export default NotFound;
