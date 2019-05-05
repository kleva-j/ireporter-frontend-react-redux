import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Sidebar from '../../components/sidebar/Index';

describe('Sidebar', () => {
  const props = {}
  const initialState = {
    profileReducer: {
      profile: { firstname: '', lastname: '', username: '', email: '', phonenumber: '' }
    }
  };

  const mockStore = configureStore([thunk]);
  const wrapper = mount(
    <Provider store={mockStore(initialState)}>
      <BrowserRouter>
        <Sidebar {...props} />
      </BrowserRouter>
    </Provider>
  );
  it('renders correctly', () => {
    expect(wrapper.find('.left').exists()).toBe(true);
    expect(wrapper.find('.user').exists()).toBe(true);
  });
});
