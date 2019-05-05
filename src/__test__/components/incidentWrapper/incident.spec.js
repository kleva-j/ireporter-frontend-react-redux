import React from 'react';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import Incident from '../../../components/incidentWrapper/incident';

describe('Reports component', () => {
  const mockStore = configureStore([thunk]);
  const initialState = {};
  const props = {
    id: 1,
    type: 'intervention',
    createdOn: 'Wed Oct 18 2017 12:41:34 GMT+0000 (UTC)',
    comment: 'a>>b',
    status: 'Resolved'
  };
  it('renders correctly', () => {
    const wrapper = mount(
      <Provider store={mockStore(initialState)}>
        <BrowserRouter>
          <Incident {...props} />
        </BrowserRouter>
      </Provider>
    );
    expect(wrapper.find('.item').exists()).toBe(true);
    expect(wrapper.find('.list').exists()).toBe(true);
  });
});
