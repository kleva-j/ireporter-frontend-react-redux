import React from 'react';
import { shallow } from 'enzyme';
import NotFound from '../../components/notFound';

describe('Notfound component', () => {
  it('should render 404 page', () => {
    const wrapper = shallow(<NotFound />);

    expect(wrapper.find('h1').text()).toEqual('Error, Page not found.');
  });
});
