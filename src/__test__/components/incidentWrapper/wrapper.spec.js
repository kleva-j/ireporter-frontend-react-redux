import React from 'react';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import Wrapper from '../../../components/incidentWrapper/incident';

describe('Reports component', () => {
  const mockStore = configureStore([thunk]);
  let component;
  it('renders correctly', () => {
    const store = mockStore({});
    const props = {
      incidents: {
        id: 1,
        type: 'intervention',
        createdOn: 'Wed Oct 18 2017 12:41:34 GMT+0000 (UTC)',
        comment: 'a>>b',
        status: 'Resolved'
      }
    };

    component = mount(
      <Provider store={store}>
        <MemoryRouter>
          <Wrapper {...props} />
        </MemoryRouter>
      </Provider>
    );
    expect(component.find('.t-c').exists()).toBe(true);
  });
});
