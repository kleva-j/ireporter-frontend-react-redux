import React from 'react';
import { shallow } from 'enzyme';
import Profile from '../../pages/profile/Index';
import Navbar from '../../components/header/Index';
import Nav from '../../components/header/SignedInLinks';

describe('Profile component', () => {
  const wrapper = shallow(<Profile />);
  it('should render the profile component', () => {
    expect(wrapper.find('section').exists()).toBe(true);
  });
  it('should contain the Navbar, button components', () => {
    expect(wrapper.find(Navbar)).toHaveLength(1);
    expect(wrapper.find(Nav)).toHaveLength(1);
  });
});
