/* eslint-disable no-restricted-globals */
import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Evidence from '../../components/evidence';

describe('Evidence component', () => {
  const mockStore = configureStore([thunk]);
  const initialState = {};
  const props = {
    setEvidence: jest.fn(),
  };
  const wrapper = mount(
    <Provider store={mockStore(initialState)}>
      <BrowserRouter>
        <Evidence {...props} />
      </BrowserRouter>
    </Provider>
  );
  test('should render the evidence component', () => {
    const fileContents = 'file contents';
    const readAsDataURL = jest.fn();
    const dummyFileReader = { addEventListener, readAsDataURL, result: fileContents };
    window.FileReader = jest.fn(() => dummyFileReader);
    const blob = new Blob(['foo'], { type: 'text/plain' });
    expect(wrapper.find('#displayEvidence').exists()).toBe(true);
    expect(wrapper.find('.bold').exists()).toBe(true);
    expect(wrapper.find('#evidence').exists()).toBe(true);
    wrapper.find('.file1').simulate('change', { target: { files: [blob] } });
    expect(FileReader).toHaveBeenCalled();
  });
});
