import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Sidebar from '../../components/sidebar/Index';
import ViewIncidents from '../../pages/viewIncidents/Index';
import Navbar from '../../components/header/Index';
import Nav from '../../components/header/SignedInLinks';

describe('ViewIncidents component', () => {
  const mockStore = configureStore([thunk]);
  const initialState = {
    profileReducer: {
      profile: { firstname: '', lastname: '', username: '', email: '', phonenumber: '' },
    },
    viewAllReducer: {
      inProgress: false,
      records: {}
    }
  };
  const props = {};
  const wrapper = mount(
    <Provider store={mockStore(initialState)}>
      <BrowserRouter>
        <ViewIncidents {...props} />
      </BrowserRouter>
    </Provider>
  );
  it('should render the ViewIncidents component', () => {
    expect(wrapper.find('section').exists()).toBe(true);
  });
  it('should contain the Navbar, button and sidebar components', () => {
    expect(wrapper.find(Navbar)).toHaveLength(1);
    expect(wrapper.find(Nav)).toHaveLength(1);
    expect(wrapper.find(Sidebar)).toHaveLength(1);
  });
});
