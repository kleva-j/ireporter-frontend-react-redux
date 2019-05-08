import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import toJson from 'enzyme-to-json';
import Logout from '../../components/logout';

describe('Logout', () => {
  const props = {
    history: {
      push: jest.fn()
    }
  };
  const initialState = {};

  const mockStore = configureStore([thunk]);
  const wrapper = mount(
    <Provider store={mockStore(initialState)}>
      <BrowserRouter>
        <Logout {...props} />
      </BrowserRouter>
    </Provider>
  );
  it('should render without failing', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
