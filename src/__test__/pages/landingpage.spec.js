import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import LandingPage from '../../pages/landingPage/Index';
import Navbar from '../../components/header/signedOutLinks';
import Nav from '../../components/header/Index';

describe('LandingPage', () => {
  const mockStore = configureStore([thunk]);
  const initialState = {};
  const component = mount(
    <Provider store={mockStore(initialState)}>
      <BrowserRouter>
        <LandingPage />
      </BrowserRouter>
    </Provider>
  );

  it('renders correctly', () => {
    expect(component.find('.container').exists()).toBe(true);
    expect(component.find('.copyright').exists()).toBe(true);
    expect(component.find('.steps')).toHaveLength(6);
    expect(component.find('.button-group').exists()).toBe(true);
    expect(component.find('.white').exists()).toBe(true);
  });

  it('should contain the Navbar, button and erroralert components', () => {
    expect(component.find(Navbar)).toHaveLength(1);
    expect(component.find(Nav)).toHaveLength(1);
  });
});
