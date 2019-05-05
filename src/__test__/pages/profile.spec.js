import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Profile from '../../pages/profile/Index';
import Navbar from '../../components/header/Index';
import Nav from '../../components/header/SignedInLinks';

describe('Profile component', () => {
  const mockStore = configureStore([thunk]);
  const initialState = {
    profileReducer: { profile: { firstname: '', lastname: '', username: '', email: '', phonenumber: '' }, }
  };
  const props = {
    getUserProfile: jest.fn(),
    getRecord: jest.fn(),
    intervention: { Resolved: 0, Rejected: 0, Draft: 0, 'Under Investigation': 0 },
    'red-flag': { Resolved: 0, Rejected: 0, Draft: 0, 'Under Investigation': 0 },
  };
  const wrapper = mount(
    <Provider store={mockStore(initialState)}>
      <BrowserRouter>
        <Profile {...props} />
      </BrowserRouter>
    </Provider>
  );
  it('should correctly render the profile component', () => {
    expect(wrapper.find('section').exists()).toBe(true);
  });
  it('should contain the Navbar, button components', () => {
    expect(wrapper.find(Navbar)).toHaveLength(1);
    expect(wrapper.find(Nav)).toHaveLength(1);
  });
});
