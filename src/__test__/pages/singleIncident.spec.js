import React from 'react';
import { shallow } from 'enzyme';
import Sidebar from '../../components/sidebar/Index';
import ViewSingleIncident from '../../pages/viewSingleIncident/Index';
import Navbar from '../../components/header/Index';
import Nav from '../../components/header/SignedInLinks';

describe('Profile component', () => {
  const wrapper = shallow(<ViewSingleIncident />);
  it('should render the ViewSingleIncident component', () => {
    expect(wrapper.find('section').exists()).toBe(true);
  });
  it('should contain the Navbar, button and sidebar components', () => {
    expect(wrapper.find(Navbar)).toHaveLength(1);
    expect(wrapper.find(Nav)).toHaveLength(1);
    expect(wrapper.find(Sidebar)).toHaveLength(1);
  });
});
