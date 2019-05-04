import React from 'react';
import { shallow } from 'enzyme';
import Sidebar from '../../components/sidebar/Index';

describe('Sidebar', () => {
  const wrapper = shallow(<Sidebar />);
  it('renders correctly', () => {
    expect(wrapper.find('.left').exists()).toBe(true);
    expect(wrapper.find('.user').exists()).toBe(true);
  });
});
