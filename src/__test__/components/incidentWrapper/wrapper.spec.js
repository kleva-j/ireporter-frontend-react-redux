import React from 'react';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import Wrapper from '../../../components/incidentWrapper/wrapper';

describe('Reports component', () => {
  const mockStore = configureStore([thunk]);
  const initialState = {};
  const props = {
    incidents: {
      id: 1,
      type: 'intervention',
      createdOn: 'Wed Oct 18 2017 12:41:34 GMT+0000 (UTC)',
      comment: 'a>>b',
      status: 'Resolved'
    }
  };
  it('renders correctly', () => {
    const wrapper = mount(
      <Provider store={mockStore(initialState)}>
        <BrowserRouter>
          <Wrapper {...props} />
        </BrowserRouter>
      </Provider>
    );
    expect(wrapper.find('.t-c').exists()).toBe(true);
  });
});
