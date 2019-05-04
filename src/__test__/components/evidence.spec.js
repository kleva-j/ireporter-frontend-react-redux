import React from 'react';
import { shallow } from 'enzyme';
import Evidence from '../../components/evidence';

describe('Evidence component', () => {
  it('should render the evidence component', () => {
    const props = {
      setEvidence: jest.fn(),
    };
    const wrapper = shallow(<Evidence {...props} />);
    expect(wrapper.find('#displayEvidence').exists()).toBe(true);
    expect(wrapper.find('.bold').exists()).toBe(true);
    expect(wrapper.find('#evidence').exists()).toBe(true);
  });
});
