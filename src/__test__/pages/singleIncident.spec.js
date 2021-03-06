import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import Sidebar from '../../components/sidebar/Index';
import ViewSingleIncident from '../../pages/viewSingleIncident/Index';
import Navbar from '../../components/header/Index';
import Nav from '../../components/header/SignedInLinks';

describe('ViewSingleIncident component', () => {
  const mockStore = configureStore([thunk]);
  const initialState = {
    viewSingleReducer: {
      record: {}
    },
    profileReducer: {
      profile: { firstname: '', lastname: '', username: '', email: '', phonenumber: '' },
    }
  };
  const props = {};
  const wrapper = mount(
    <Provider store={mockStore(initialState)}>
      <BrowserRouter>
        <ViewSingleIncident {...props} />
      </BrowserRouter>
    </Provider>
  );
  it('should render the ViewSingleIncident component', () => {
    expect(wrapper.find('section').exists()).toBe(true);
  });
  it('should contain the Navbar, button and sidebar components', () => {
    expect(wrapper.find(Navbar)).toHaveLength(1);
    expect(wrapper.find(Nav)).toHaveLength(1);
    expect(wrapper.find(Sidebar)).toHaveLength(1);
  });
});
