/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from '../Components/App';
import { store } from '../Store/store';
import '../scss/styles.scss';
import '../scss/layout.scss';
import '../scss/reset.scss';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
