import React from 'react';
import { shallow } from 'enzyme';
import Map from '../../components/Map/map';

describe('Map component', () => {
  it('should render the map component', () => {
    const wrapper = shallow(<Map />);
    expect(wrapper.find('#marker').exists()).toBe(true);
  });
});
