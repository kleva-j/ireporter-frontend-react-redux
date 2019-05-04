import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import CreateIncident from '../../pages/createIncident/Index';

describe('CreateIncident component', () => {
  const wrapper = shallow(<CreateIncident />);
  it('should render without failing', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
