/* eslint-disable react/jsx-filename-extension */
import "@babel/polyfill";
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './app';
import store from './store/store';
import 'toasted-notes/src/styles.css';
import './assets/scss/styles.scss';
import './assets/scss/layout.scss';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
